const http = require('http');
const fs = require('fs');

http.createServer((req, res) => { //van egy kérés és válasz paraméter
    res.writeHead(200, { //válasz fejlécébe beleírjuk, h. 200, azaz ok, és megadjuk a tartalom típusát
        'Content-Type': 'text/html'
    });
    //readFileSync beolvassa egy az egyben a teljes html fájlt --> erőforrásigényes
    let html = fs.readFileSync(__dirname + '/index.html', 'utf-8'); //root útvonal + index.html, maga a fájl tartalmát jelöli

    const message = "Yeah It\'s works!";
    html = html.replace('{{message}}', message);

    res.end(html);
}).listen(8080); //ez a server a 8080-as szervert figyeli

console.log('Server is running'); //sajátgép logbag címe