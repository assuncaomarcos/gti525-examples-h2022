const fs = require('fs');
const EventEmitter = require('events');

// const http = require('https');
// const file = fs.createWriteStream("alice_in_wonderland.txt");
// const request = http.get("https://www.gutenberg.org/files/11/11-0.txt",
//     (response) => {
//         response.pipe(file);
//     });

function registerEvents(emitter, keywords) {
    const counts = [];
    const increment = function (index) {
        return function () {
            counts[index]++;
        }
    }
    for (let i = 0; i < keywords.length; ++i) {
        counts[i] = 0;
        emitter.on(keywords[i], increment(i));
    }
    return function () {
        console.log("Counters: ");
        for (let i = 0; i < counts.length; i++) {
            console.log("Count[" + keywords[i] + "] = " + counts[i]);
        }
    }
};

const eventEmitter = new EventEmitter();

// Lit le contenu du fichier et définit les gestionnaires pour analyser les mots
const text = fs.readFileSync("alice_in_wonderland.txt").toString();
console.log(text.length);
const keywords = ["Alice", "little", "Rabbit", "Turtle", "Lobster"];
const printCounts = registerEvents(eventEmitter, keywords);

const words = text.split(" ");
words.forEach( word => {
    eventEmitter.emit(word.trim());
});

printCounts();