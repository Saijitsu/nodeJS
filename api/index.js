const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Mongoose = odm : object document mapping (association : map)
// Relation entre un document et un objet, on va creer une représentation sous 
// forme d'objet dans un document

// Récupération biblio mongoose
const mongoose = require('mongoose');
// On établie la connection vers la base de donnée (la collection étant ici nodeJS: lieu de stockage)
mongoose.connect('mongodb://localhost:27017/nodeJS', {
    useNewUrlParser: true
}).then(() => {
    console.log('Connexion établie avec succès')
});

// const db = mongoose.connection; <= recupérer les infos de la connection

const Product = require('./model/product');

// middleware (permet d'ajouter a express des fonctionnalités: ex, par défaut express n'a pas de sessions)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/product', (request, response) => {
    Product.find().then((products) => {
        response.send(products);
        // look here : http://localhost:3200/product
        // pour tester son code https://jsonplaceholder.typicode.com/
    });
});

app.get('/product/:id', (request, response) => {

    Product.findById(request.params.id).then((product) => {
        response.send(product);
    });
});

app.post('/product', (request, response) => {
    let product = new Product({
        name: request.body.name,
        price: request.body.price
    });

    product.save().then(() => {
        response.statusCode = 201;
        response.send({
            "message": "Created"
        });
    });
});

app.put('/product/:id', (request, response) => {
    Product.findByIdAndUpdate(request.params.id, request.body).then( () => {
        response.statusCode = 204;
        response.send({
            "message": "No Content"
        });
    })
});

app.delete('/product/:id', (request, response) => {

});

app.listen(3200, () => {
    console.log('Api Server listening at http://localhost:3200');
});