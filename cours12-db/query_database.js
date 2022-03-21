const mysql = require('mysql');

// Pour déclarer une connexion
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'gti525',
    database : 'cuisine'
});

// Pour connecter
connection.connect(function(err) {
    if (err) {
        console.error('Erreur lors de la connexion: ' + err.stack);
        return;
    }
    console.log('Id. de connexion: ' + connection.threadId);
});

// Pour consulter la base de données
connection.query('SELECT * FROM dish',
    function (error, results, fields) {
        if (error) throw error;

        for (let row of results) {
            console.log(row.name);
        }
    }
);

connection.end();