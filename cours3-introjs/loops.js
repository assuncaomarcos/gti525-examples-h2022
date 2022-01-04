console.log(":: loops.js ::");

var vspResults = [99, 96, 93, 91, 89, 87, 80, 75, 74, 63, 61, 52, 49, 47, 43, /* ... */ 41];
for (var i = 0; i < 3; i++) {
    console.log("Score #" + (i+1) + ": " + vspResults[i]);
}

console.log(" -------- ");

// --------

// Imprime les top-10 résultats, et arrêter lorsque le résultat tombe sous la barre des 90
for (var i = 0; ( (i < 10) && (vspResults[i] >= 90) ); i++) {
    console.log("Score #" + (i+1) + ": " + vspResults[i]);
}

console.log(" -------- ");

// --------

var passingGrade = 50;

// Imprimer tous les résultats qui sont au-dessus ou égal à la note de passage
var i = 0;
while (vspResults[i] >= passingGrade) {
    console.log(vspResults[i]);
    i++;
}

console.log(" -------- ");

// --------

// Imprimer le premier résultat, puis tous ceux qui sont au-dessus ou égal là la note de passage

passingGrade = 50;

var i = 0;
do {
    console.log(vspResults[i]);
    i++;
} while (vspResults[i] >= passingGrade);

