const mysql = require('mysql');
require("dotenv").config();

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

// Renvoie la liste de plats
function getAllDishes() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM dish";
        connection.query(sql, function (err, results, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

// Renvoie un plat avec l'identifiant fourni
function getDishById(id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM dish WHERE id = ?";
        connection.query(sql, [id], function (err, results, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

// Renvoie les ingredients d'un plat
function getDishIngredients(dish_id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT quantity, unit, name FROM ingredient 
          INNER JOIN item ON ingredient.item_id = item.id 
          WHERE ingredient.dish_id = ?`;
        connection.query(sql, [dish_id], function (err, results, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

// Renvoie le text de comment preparer le plat
function getHowToMake(dish_id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM how_to WHERE dish_id = ?`;
        connection.query(sql, [dish_id], function (err, results, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

getAllDishes()
    .then(results => { console.log(results);})
    .catch(err => console.error(err));

getDishIngredients(1)
    .then(results => { console.log(results);})
    .catch(err => console.error(err));

connection.end();