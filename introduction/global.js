console.log('--__filename--');
console.log('__filename = %s', __filename);
console.log('--__dirname--');
console.log('__dirname= %s', __dirname);
let timer = 1000;
setTimeout( () => {
    console.log('Je suis exécuté après %d ms', timer)
}, timer);