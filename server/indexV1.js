const http = require('http');
const url = require('url');

const server = http.createServer();

server.on('request', (request, response) => {
    console.log('New Request catch: %s', request.url);
    response.setHeader('Content-Type', 'text/html;charset=utf-8');

    let page = url.parse(request.url).pathname;

    if (page === "/") {
        response.write('<h1>Bravo, la première étape vers le succès a été atteinte</h1>');
        response.write('<p><a href="/contact">contact</a></p>');
    } else if (page === "/contact") {
        response.write('<h1>Contact</h1>');
        response.write('<p>Pour nous contacter... blabla</p>');
        response.write('<p><a href="/">Retour à l\'accueil!</a></p>');
    }else{
        response.statuscode = 404;
        response.write('<h1>Erreur 404</h1>');
        response.write('<p>Cette page n\'existe pas!</p>');
        response.write('<p><a href="/">Retour à l\'accueil!</a></p>');
    }
    response.end("Merci pour ce moment.");
});

server.listen(1234);
console.log('** Personal Node Server is listening on localhost: 1234,' +
    'open your browser ont http://localhost:1234/ **');
console.log('** Shutdown Personnal Node Server with CTRL+C**');