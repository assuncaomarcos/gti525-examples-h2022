const dishes = require("./dishes");

async function getAllDishes(req, res) {
    try {
        const list = await dishes.getAllDishes();
        if (list) {
            res.json(list);
        } else {
            res.status(404).json({ error: "Il n'y a aucun plat!" });
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
}

async function insertDish(req, res) {
    const json = req.body;
    try {
        const result = await dishes.insertDish(json);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

async function getDishById(req, res) {
    const id = parseInt(req.params.id);
    try {
        const dish = await dishes.getDishById(id);
        if (dish) {
            res.json(dish);
        } else {
            res.status(404).json({ error: "Plat introuvable" });
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
}

async function updateDish(req, res) {
    const id = parseInt(req.params.id);
    const json = req.body;
    try {
        const result = await dishes.updateDish(id, json);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

async function deleteDish(req, res) {
    const id = parseInt(req.params.id);
    try {
        const result = await dishes.deleteDish(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports = {
    getAllDishes,
    insertDish,
    getDishById,
    updateDish,
    deleteDish
}