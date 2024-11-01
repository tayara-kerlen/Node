
import http from 'http'; // versão atual (recomendada)
// const http = require('http'); // versão antiga

const hostname = '127.0.0.1'; // 'localhost'
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Type', 'text/html');
    // response.setHeader('Content-Type', 'application/json');
    response.end("<h1>Buenas</h1>");
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
