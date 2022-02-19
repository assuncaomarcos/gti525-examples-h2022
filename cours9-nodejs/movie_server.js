const http = require('http');
const csvtojson = require('csvtojson');
const fs = require('fs');
const { Transform } = require('stream');

const hostname = 'localhost';
const port = process.env.NODE_PORT || 3000;
const dataset = 'video_game_films.csv';

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/movies")) {

        const lineToArray = new Transform({
            transform (chunk, encoding, cb) {
                // ajoute [ au début du résultat
                // ajoute , entre les lignes
                // enleve the saut de ligne
                this.push((this.atFirstRow ? ',' : '[') + chunk.toString('utf-8').slice(0, -1));
                this.atFirstRow = true;
                cb();
            },
            flush(cb) {
                // ajoute ] à la fin ou [] s'il n'y pas de lignes
                const isEmpty = (!this.atFirstRow);
                this.push(isEmpty ? '[]' : ']');
                cb();
            }
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        const stream = fs.createReadStream(dataset);
        stream
            .pipe(csvtojson({
                downstreamFormat:"line",
                checkType:true
            }))
                .pipe(lineToArray)
                .pipe(res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Not found");
    }
})

server.listen(port, hostname, () => {
    console.log(`Serveur démarré à l'adresse http://${hostname}:${port}/`);
})