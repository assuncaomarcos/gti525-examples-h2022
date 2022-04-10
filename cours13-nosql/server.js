require("dotenv").config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.NODE_PORT || 3000;
const app = express();

// pour connecter à la base de données
const db = require('./db');

app.use(express.json());
app.use(cors());
app.use(require('./routes'));

// établie une connection à MongoDB lors du démarrage de l'application
db.connect()
    .then( () => {
        app.listen(PORT, () => console.log(`Serveur écoute a http://localhost:${PORT}`));
    })
    .catch(error => {
        console.log("Erreur de connexion: " + error);
        process.exit();
    });