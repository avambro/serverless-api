exports.handler = async event => {
    if(event.httpMethod === 'GET'){
        let data = getData(event);
        return response(data);
    }
}


const getData = event =>{
    if(!event.queryStringParameters) return {}
    let name = event.queryStringParameters.name;
    return data[name] || {}
}


const data = {
  Jean: { year: 1988, movie: "Bloodsport" },
  Claude: { year: 1989, movie: "Kickboxer" },
  Van: { year: 1990, movie: "Hard Target" },
  Damme: { year: 1993, movie: "Double Impact" }
};


const response = data => {
    return {
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Methods':'*',
            'Access-Control-Allow-Origin':'*'
        },
        statusCode: 200,
        body : JSON.stringify(data)
    }
}