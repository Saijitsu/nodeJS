const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const mimeType = {
    '.css': 'text/css'
}

const server = http.createServer();

const router = require('find-my-way')({
    defaultRoute: (request, response) => {

        let page = url.parse(request.url).pathname;

        if (!fs.existsSync(path.join(__dirname, page))) { //si le chemin sur lequel je vais n'existe pas : 404
            let html = `<h1>Erreur 404</h1>
    <p>Cette page n\'existe pas!</p>
   <p><a href="/">Retour à l\'accueil!</a></p>`

            response.statuscode = 404;
            response.end(html);
        } else {
            fs.readFile(path.join(__dirname, page), (err, data) => {
                if (err) {
                    response.statusCode = 500;
                    response.end('Internal Error');
                } else {
                    const ext = path.parse(page).ext;

                    response.setHeader('Content-Type', mimeType[ext] || 'text/plain');
                    response.end(data);
                }
            })
        }
    }
});

router.get('/', (request, response) => {
    let html = `
    <html>
    <head>
    <title>Accueil</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="/public/css/style.css" />
    </head>
    <body>
    <h1>Bravo, la première étape vers le succès a été atteinte</h1>
    <p><a href="/contact">contact</a></p>
    </body>
    </html>`;

    response.end(html);
});

router.get('/contact', (request, response) => {
    let html = `
    <html>
        <head>
            <title>Contact</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="/public/css/style.css" />
        </head>
    <body>
        <h1>Bravo, vous êtes sur contact!</h1>
        <p><a href="/">Retour à l\'accueil!</a></p>
    </body>
    </html>`;

    response.end(html);
});

server.on('request', (request, response) => {
    console.log('New Request catch: %s', request.url);
    response.setHeader('Content-Type', 'text/html;charset=utf-8');

    router.lookup(request, response);
});

server.listen(1234);
console.log('** Personal Node Server is listening on localhost: 1234,' +
    'open your browser ont http://localhost:1234/ **');
console.log('** Shutdown Personnal Node Server with CTRL+C**');