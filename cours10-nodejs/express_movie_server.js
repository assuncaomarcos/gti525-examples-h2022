const express = require('express')
const csvtojson = require('csvtojson');

const port = process.env.NODE_PORT || 3000;
const csvfile = 'video_game_films.csv';
const movieDataset = {};

async function loadDataset(csvfile) {
    return csvtojson({
        downstreamFormat: "line",
        checkType: true
    }).fromFile(csvfile);
}

loadDataset(csvfile)
    .then(list => {
        list.forEach( e => movieDataset[e.id] = e);
    })
    .catch(e => {
        console.log("Erreur pour traiter le fichier csv: " + e.message);
        process.exit(1);
    });

const app = express()

app.get('/movies', (req, res) => {
    res.json(Object.values(movieDataset));
})

app.get('/movies/:movieId', (req, res) => {
    let movie = movieDataset[req.params.movieId];
    if (movie == undefined) {
        res.sendStatus(404);
    } else {
        res.json(movie);
    }
})

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`)
})