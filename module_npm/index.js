const mod = require('./module'); // mod (my module)
const dawan = require('@tonno/dawan');
console.log (mod.bonjour());

console.log(mod.aurevoir());

dawan.Saluer();
dawan.Bye();

console.log(dawan.allUser());