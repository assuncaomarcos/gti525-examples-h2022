require("dotenv").config();
const express = require('express');
const cors = require('cors');

// pour connecter à la base de données
require('./config/mongodb').connect();

const PORT = process.env.NODE_PORT || 3000;
const app = express();
app.use(express.json());
app.use(require('./routes/dishes'));
app.use(require('./routes/auth'));

app.listen(PORT, () => console.log(`Serveur écoute a http://localhost:${PORT}`));