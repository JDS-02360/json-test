let promise = new Promise((resolve, reject) => {
    let cEquals = 5;
    let a = 2;
    let b = 3;
    let c = a + b;

    if(c == cEquals) {
        resolve('Success.');
    } else {
        reject('Failure.')
    }
});

promise.then((message) => {
    let jsonData = `{
        "string": "value",
        "number": 3,
        "boolean": true,
        "array": ["value", 3, true],
        "object": {
            "nested": true
        }
    }`;

    let parsedData = JSON.parse(jsonData);
    let mappedData = new Map(Object.entries(parsedData));

    for(const i of mappedData) {
        console.log(i);
    }

    console.log(`${message} The .then method has been run.  The JSON data has been parsed.`);
}).catch((message) => {
    console.log(`${message} The .catch method has been run.  The JSON data was not parsed.`);
});
