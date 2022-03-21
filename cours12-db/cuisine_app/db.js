const mysql = require('mysql');
require("dotenv").config();

const pool = mysql.createPool({
    connectionLimit: 5,
    host     : process.env.MARIADB_HOST,
    user     : process.env.MARIADB_USER,
    password : process.env.MARIADB_PWD,
    database : process.env.MARIADB_DB
});

// Renvoie la liste de plats
function getAllDishes() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM dish";
        pool.query(sql, function (err, results, fields) {
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
        pool.query(sql, [id], function (err, results, fields) {
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
        pool.query(sql, [dish_id], function (err, results, fields) {
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
        pool.query(sql, [dish_id], function (err, results, fields) {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

// Exporter les fonctions pour être utilisées par d'autres modules
module.exports = {
    getAllDishes,
    getDishById,
    getDishIngredients,
    getHowToMake
};