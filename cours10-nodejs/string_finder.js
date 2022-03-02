// Recherche une chaîne donnée dans un fichier.
// Paramètres:
// 1) Nom du fichier
// 2) Chaîne la rechercher
// On assume que la longueur de la chaîne recherchée < la longueur du tampon de lecture
// (nécessaire puisque deux tampons de lecture sont concaténés)
const fs = require('fs');
if (!fs) process.exit(1);

if (process.argv.length < 4) {
    console.log("Syntax: fileName string");
    process.exit(2);
}

const filename = process.argv[2];
const textToFind = process.argv[3];
const readStream = fs.createReadStream(filename);

let oldBlob = "";
let index = -1;

readStream.on("data", function (blob) {
    console.log("Caractères lus: " + blob.length);
    var newBlob = oldBlob + blob;
    index = newBlob.indexOf(textToFind);
    if (index >= 0) readStream.emit("end");
    oldBlob = blob;
});

readStream.on("end", function () {
    if (index >= 0)
        console.log("Chaîne trouvée: " + textToFind);
    else
        console.log("Chaîne introuvable: " + textToFind);
});

readStream.on("error", function () {
    console.log("Erreur lors de la lecture du fichier: " + fileName);
});

console.log("Fin du programme");
