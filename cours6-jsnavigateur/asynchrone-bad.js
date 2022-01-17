let name = "";

// Sera exécuté plus tard, dans 1s
setTimeout(function() {
    name = prompt("Quel est votre nom?");
}, 1000);

console.log("Votre nom est: " + name);