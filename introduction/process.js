console.log(process.env);
// console.log(process.argv);
const argv = process.argv.slice(2);
console.log(argv);
if (argv.includes('--version')) {
    console.log("process.js Version 1.0.0");
}
if (argv[0]) {
    console.log(argv[0]);
}

if (!argv[0]) {
    console.error("Le message est obligatoire");
    process.exit();
}
// node introduction/process.js coucou -uc
// if(argv.includes('-uc')){
//     console.log(argv[0].toUpperCase());
// }
const chaine = argv[0];
if (argv.includes('-uc')) {
    console.log(chaine.toUpperCase());
} else {
    console.log(chaine)
}