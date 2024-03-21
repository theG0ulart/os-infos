const http = require('http');
const status = require('./pcRamUsage')
const host = 'http://localhost';
const PORT = 3000;

http.createServer((req, res) => {
    let url = req.url;

    if(url === '/status'){
        res.end(JSON.stringify(status, null, 2))
    } else {
        res.end(`<h1>Seja bem vindo</h1>`)
    }

}).listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));