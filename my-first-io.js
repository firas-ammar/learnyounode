
const fs = require('fs');
let x = fs.readFileSync(process.argv[2]).toString();
space = x.split('\n').length - 1
console.log(process.argv)