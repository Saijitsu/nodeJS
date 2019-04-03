const express = require('express');
const path = require('path');

const app = express();

const njk = require('nunjucks').configure(`${__dirname}/template`, {
    autoescape: true,  // pour eviter les injection XSS, n'interprete pas par defaut le code en html (balise off)
    // pour éviter les injection d'SQL il suffira d'éviter les " et ' en ne les interpretant pas (échapper les caractères).
    // CSRF (forger un requête sur un server distant), suppression via un lien (envoyé a un utilisateur ayant les droits):
    // - utilisation d'un capcha
    // - utilisation de token (acces temporaire, via système de token), le server le crée sur demande de l'utilisateur
    // Enfin => HTTPS (une couche de chiffrement comme SSL ou TLS se rajoute)
    express: app
});

app.use(express.static(__dirname)); // fichier static

app.get('/', (request, response) => {

    let userSource = "<script>alert('xss')</script>";

    response.render('accueil.njk.html', { html: userSource }); 
    // userSource devient accessible dans le html d'accueil

});

app.get('/hello/:name', (request, response) => {
    let name = request.params.name;

    response.render('hello.njk.html', { name: name }); 
    // transmission d'un parametre du controleur ver la vue
});


app.get('/old', (request, response) => {

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