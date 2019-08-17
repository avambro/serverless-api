exports.handler = async event => {
    if(event.httpMethod === 'GET'){
        let data = getData(event);
        return Response(data);
    }
}


const getData = event =>{
    if(!event.queryStringParameters) return {}
    let name = event.queryStringParameters.name;
    return data[name] || {}
}


const data = {
    John: { age:26, job: "builder"},
    Claude: { age: 19, job: "Teacher" },
    Damme: { age: 33, job: "builder Supervisor" },
    Marcus: { age: 36, job: "Photographer" },
}


const response = data => {
    return {
        Headers: {
            'Content Type' : 'application/json',
            'Access-Control-Allow-Methods':'*',
            'Access-Control-Allow-Origin':'*'
        },
        statusCode: 200,
        body : JSON.stringify(data)

    }
}