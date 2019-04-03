const nodeUrl = require('url');
const {
    format
} = require('url'); // récupère uniquement la fonction format()
let url = new URL('https://user:passeword@dawan.fr:8080/node?page=1#plan');

console.log(url);
console.log("Protocol: %s; Hostname: %s", url.protocol, url.hostname);

console.log(nodeUrl.parse(url.toString()));

let options = {
    auth: false,
    fragment: false,
    search: false
};
let newUrl = format (url, options);

console.log(format(url, options));

console.log(newUrl);

// url.searchParams.set('page', 2);
// url.searchParams.append('limit', 5);

let newUrlObject = new URL(newUrl);

newUrlObject.searchParams.set('page', 2);
newUrlObject.searchParams.append('limit', 3);

console.log(newUrlObject.toString());