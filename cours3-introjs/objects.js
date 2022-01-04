console.log(":: objects.js ::");

var vspResults = {
    Karthik:99,
    Bob:96,
    Kevin:93,
    Julien:91,
    John:41};

console.log(vspResults["Karthik"]); // affiche 99
console.log(vspResults["Bob"]); // affiche 96

for (var e in vspResults) {
	console.log(e);             // Affiche le nom
	console.log(vspResults[e]); // Affiche le score
}

console.log(vspResults.Karthik); // affiche 99

