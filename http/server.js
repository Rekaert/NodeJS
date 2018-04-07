//http modullal tudunk szervert létrehozni
//kiszolgálja a szabványos http kéréseket
const http = require('http');

http.createServer((req, res) => { //van egy kérés és válasz paraméter
    res.write('Hello World!');
    res.end();
}).listen(8080); //ez a server a 8080-as szervert figyeli

console.log('Server is running at 127.0.0.1:8080'); //sajátgép logbag címe