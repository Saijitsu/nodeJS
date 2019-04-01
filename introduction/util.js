const util = require('util'); // promisify
const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, 'assets', 'content', 'hello.txt');
const readFile = util.promisify(fs.readFile);

readFile(filename)
.then(file => console.log(String(file)))
.catch(console.log);