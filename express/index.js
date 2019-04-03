const express = require('express');

const app = express();

app.use(express.static(__dirname)); // fichier static

app.get('/', (request, response) => {

    let html = `
    <html>
    <head>
    <title>Accueil</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="/public/css/style.css" />
    </head>
    <body>
    <h1>Bienvenue sur Express</h1>
    </body>
    </html>`;

    response.end(html);
});

app.listen(1234, () => {

    console.log('Web Server listening at http://localhost:1234');

});