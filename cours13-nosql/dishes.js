const dbConnection = require('./db');

async function getAllDishes() {
    const db = dbConnection.db();
    try {
        return dishes = await db.collection('dishes').find({}).toArray();
    } catch (error) {
        console.log("Erreur pour récuperer les plats.");
    }
}

async function insertDish(dish) {
    const db = dbConnection.db();
    try {
        return result = await db.collection('dishes').insertOne(dish);
    } catch (error) {
        console.log("Erreur dans la création du plat.");
    }
}

async function getDishById(id) {
    const db = dbConnection.db();
    try {
        return dish = await db.collection('dishes').findOne({_id : { $eq: id }});
    } catch (error) {
        console.log("Erreur pour récuperer le plat.");
    }
}

async function updateDish(id, dish) {
    const db = dbConnection.db();
    try {
        return result = await db.collection('dishes').updateOne({_id : { $eq: id }}, {$set : dish});
    } catch (error) {
        console.log("Erreur dans la mise à jour du plat.");
    }
}

async function deleteDish(id) {
    const db = dbConnection.db();
    try {
        return result = await db.collection('dishes').deleteOne({_id : { $eq: id }});
    } catch (error) {
        console.log("Erreur dans la mise à jour du plat.");
    }
}

module.exports = {
    getAllDishes,
    insertDish,
    getDishById,
    updateDish,
    deleteDish
}