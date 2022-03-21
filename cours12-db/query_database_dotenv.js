const mysql = require('mysql');
require("dotenv").config();

// dotenv a créé des variables d'environnement
// selon les valeurs spécifiés dans le fichier .env
const connection = mysql.createConnection({
    host     : process.env.MARIADB_HOST,
    user     : process.env.MARIADB_USER,
    password : process.env.MARIADB_PWD,
    database : process.env.MARIADB_DB
});

connection.connect(function(err) {
    if (err) {
        console.error('Erreur lors de la connexion: ' + err.stack);
        return;
    }
    console.log('Id. de connexion: ' + connection.threadId);
});

connection.query('SELECT * FROM dish',
    function (error, results, fields) {
        if (error) throw error;

        for (let row of results) {
            console.log(row.name);
        }
    }
);

connection.end();