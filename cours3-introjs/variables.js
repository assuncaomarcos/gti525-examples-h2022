var a = 10;
var b = 9.7;
var c = 1.997e8;
var d = 2 + 3;

console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);

var myVariable = a + 5.5;   // 15.5
console.log("myVariable = " + myVariable);

var funnyNumber = "a" + a;
console.log(`funnyNumber = ${funnyNumber}`);

var myString = "Une chaine de caracteres";
var badNumber = b / myString; // NaN, pas possible de diviser par une chaine
console.log(`badNumber = ${badNumber}`);

// Les nombres plutot speciaux
console.log("Valeur de Number.MAX_VALUE = " + Number.MAX_VALUE);

var longString = myString + " plus longue";
console.log(longString);

var anotherString = `La moitie de 100 est ${100 / 2}`;
console.log(anotherString);
