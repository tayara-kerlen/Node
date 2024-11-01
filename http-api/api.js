import http from 'http'

// Host e Porta
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    // Rota para a página Home
    if (request.method === 'GET' && request.url === '/') {
        response.statusCode = 200; // OK
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>Home</h2>');

    // Rota para a página Sobre    
    } else if (request.method === 'GET' && request.url === '/sobre') {
        response.statusCode = 200; // OK
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>Sobre</h2>');   

     // Rota para a página Cadastro de Usuário  
    } else if (request.method === 'POST' && request.url === '/cadastro-usuario') {
        response.statusCode = 200; // OK
        response.setHeader('Content-Type', 'text/html');
        response.end('<h2>Cadastro de Usuário</h2>');   

    } else {
        response.statusCode = 404; // Not Found (página não encontrada)
        response.end('<h2>404 - Página não encontrada</h2>');
    }
});

server.listen(port, hostname, () => {
    // console.log(`Servidor rodando em http://localhost:3000/`);
    console.log(`Servidor rodando em http://${hostname}:${port}/`);   
});