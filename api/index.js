const express = require('express');

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
const db = mongoose.connection;

const Product = require('.model/product');

app.get('/product', (request, response) => {
    Product.find().then(() => {
        response.send(products);
    });
});

app.get('product/:id', (request, response) => {

});

app.listen(3200, () => {
    console.log('Api Server listening at http://localhost:3200');
});