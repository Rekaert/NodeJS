const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    //a válaszhoz hozzáfűzzük a streamünket=> van egy válasz ami igazából egy stream
    //ezt a sream folyamot ráfűzzük, rápájpoljuk a válaszra
    //egy fájl adat folyamot hozunk létre a createReadStreammel
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

server.listen(8080);