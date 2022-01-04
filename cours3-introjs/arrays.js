console.log(":: arrays.js ::");

var vspResults = [99, 96, 93, 91, /* ... */ 41];
console.log(vspResults);
/* Affiche le résultat des étudiants top-3 -- attention,
   dans la plupart des langages, le premier index est 0! */
console.log("Résultat du 1er étudiant: " + vspResults[0]);
console.log("Résultat du 2e étudiant: " + vspResults[1]);
console.log("Résultat du 3e étudiant: " + vspResults[2]);

// Ajout d'un item
vspResults.push(39);
console.log(vspResults);

// Retrait d'un item
vspResults.pop(); // Retire 39
console.log(vspResults);

// Taille du tableau
console.log( vspResults.length );
