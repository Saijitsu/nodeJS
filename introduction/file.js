const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'assets', 'content', 'hello.txt');

fs.readFile(filename, (err, content) => {
    if (err) {
        throw new Error(err.message);
    }
    //  console.log(content.toString());
    console.log(String(content));
});

// fs.copyFile(src, dest[, flags], callback)
// const copy = path.join(path.dirname(filename), 'copy.txt');
// fs.copyFile(filename, copy, (err) => {
//     console.log('Copie terminée');
// });
//
// const rename = path.join(path.dirname(copy), 'world.txt');
// fs.rename(copy, rename, (err) => {
//     console.log('Copie renommé');
// });

// Créer un fichier & écrire dedans
const newFile = path.join(__dirname, 'assets', 'content', 'deleteme.txt');
const contentOfFile = 'Apprendre node c\'est pas cool';

fs.writeFile(newFile, contentOfFile, (err) => {
    console.log('Le fichier a bien été crée');
});

const copy = path.join(path.dirname(filename), 'copy.txt');
const rename = path.join(path.dirname(copy), 'world.txt');

fs.copyFile(filename, copy, (err) => {
    console.log('Copie terminée');
    fs.rename(copy, rename, (err) => {
        console.log('Copie renommé');
    });
});

fs.unlink(newFile, (err) => {
    // if (err) {
    //             throw new Error(err.message);
    // }
    if (err) throw err; // solution alternative
    console.log('fichier supprimé');
});

const images = path.join(__dirname, 'assets', 'images');

fs.mkdir(images, (err) => {
    if (err) {
    }
    console.log('Le dossier %s a bien été créé', path.basename(images))
});

fs.rmdir(images, (err) => {
    console.log('Le dossier %s a bien été supprimé', path.basename(images))
});