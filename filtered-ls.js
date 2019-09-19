const fs = require('fs');
const path = require('path');
var tab = process.argv;
var extension = "."+tab[3]

fs.readdir(tab[2], (err, list) => {
    if(err) console.log(err)
    else {
        var targetFiles = list.filter(el => {
            return path.extname(el) === extension // resultat ["moez.md", "firas.md"]
        })
    }
    targetFiles.forEach(hamza => console.log(hamza))
})