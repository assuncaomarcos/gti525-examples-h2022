Dish = require('../models/dish');

async function allDishes(req, res) {
    try {
        const dishes = await Dish.find();
        if (dishes) {
            res.status(200).json({
                status: "succes",
                message: "Plats récupérés avec succès",
                data: dishes
            });
        } else {
            res.status(404).json({
                status: "erreur",
                message: "Plats introuvables"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}

async function insertDish(req, res) {
    const dish = req.body;
    try {
        const doc = await Dish.create(dish);
        if (doc) {
            res.status(200).json({
                status: "succes",
                message: "Plat crée avec succès",
                data: doc
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}

async function dishById(req, res) {
    try {
        const dish = await Dish.findById(req.params.id).exec();
        if (dish) {
            res.status(200).json({
                status: "succes",
                message: "Plat récupéré avec succès",
                data: dish
            });
        } else {
            res.status(404).json({
                status: "erreur",
                message: "Plat introuvable"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}

async function updateDish(req, res) {
    const id = req.params.id;
    const dish = req.body;

    try {
        const result = await Dish.updateOne({_id : id }, dish);

        if (result.acknowledged) {
            res.status(200).json({
                status: "succes",
                message: "Plat modifié avec succès",
                data: await Dish.findById(id).exec()
            });
        } else if (!result.matchedCount) {
            res.status(404).json({
                status: "erreur",
                message: "Plat introuvable"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}

async function deleteDish(req, res) {
    const id = req.params.id;
    try {
        const result = await Dish.deleteOne({_id: id});
        if (result.acknowledged) {
            res.status(200).json({
                status: "succes",
                message: "Plat supprimé avec succès"
            });
        } else if (!result.matchedCount) {
            res.status(404).json({
                status: "erreur",
                message: "Plat introuvable"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}

module.exports = {
    allDishes,
    dishById,
    insertDish,
    updateDish,
    deleteDish
}