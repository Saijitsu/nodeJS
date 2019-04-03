let users = ['user 1', 'user 2']; // tableau indexé
let map = new Map(); // Contient à tableau, mais est une classe

console.log(users[0]);

map.set('name', 'John')
    .set('lastname', 'Doe')
    .set('age', 25);

console.log("Bonjour %s %s", map.get('name'), map.get('lastname'));

console.log("Map Size: %d", map.size);

for (value of map) {
    console.log(value);
}

for (let [key, value] of map.entries()) {
    console.log("Key = %s; Value = %s", key, value);
}

// ---------------------------------

let set = new Set();
set.add('Hello').add(' World').add(' Hello!');

console.log("Set Size: %d", set.size);

if (set.has('Goodbye')) {
    set.delete('Goodbye');
}

for (let value of set.values()) {
    console.log(`Value = ${value}`);
}

console.log("-----------------------");
console.log("Association par destructuration");

let data = [1, 2, 3];

let [a, b, c] = data;

console.log("a = %d; b = %d; c = %d", ...data);

let x = 1;
let y = 2;
console.log("Avant - x = %d; y = %d", x, y);
[y, x] = [x, y]
console.log("Après - x = %d; y = %d", x, y);