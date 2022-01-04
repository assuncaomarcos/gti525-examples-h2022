console.log(":: conditionals.js ::");

var x = 5;

console.log(x == 5);    // true
console.log(x != 4);    // true
console.log(x > 5);     // false
console.log(x >= 5);    // true
console.log(x < 5);     // false
console.log(x <= 5);    // true

console.log(x === 5);   // true - égal+même type
console.log(x === "5"); // false - type différent
console.log(x !== 5);   // false - pas égal
console.log(x !== "5"); // true - type différent

var foo = "VSP";
console.log(foo == "VSP");    // true
console.log(foo === "VSP");   // true
console.log(foo != "UBC");    // true
console.log(foo !== "42");    // true

console.log(" -------- ");

// --------

// Retourne vrai si value >= min et value <= max
function isBetween(value, min, max) {
    return ( (value >= min) && (value <= max) );
}

console.log( isBetween( 10, 5, 15) ); // true
console.log( isBetween( 10, 5, 8 ) ); // false

console.log(" -------- ");

// --------

var condition = false;
if (condition)
	console.log("Cette ligne s'exécute si la condition est vraie");
	console.log("Cette ligne va toujours s'exécuter");

console.log(" -------- ");

// --------

if ( isBetween(15, 10, 20) ) {
	console.log("Nombre dans la plage!");
} else {
	console.log("Nombre hors plage!");
}

console.log(" -------- ");

// Équivalent à -->

if ( (15 >= 10) && (15 <= 20) ) {
	console.log("Nombre dans la plage!");
} else {
	console.log("Nombre hors plage!");
}

console.log(" -------- ");

// --------

if ( isBetween(15, 10, 20) ) {
    if ( isBetween(15, 14, 16) ) {	
	console.log("Excellent!");
    } else {
	console.log("Bien.");
    }
} else {
    console.log("Mauvais!");
}

console.log(" -------- ");

// --------

var score = 75;
var grade = "";

if ( score >= 80 ) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Votre résultat est " + grade);

