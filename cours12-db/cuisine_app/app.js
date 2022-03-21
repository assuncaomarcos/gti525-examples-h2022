require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();
const PORT = process.env.NODE_PORT || 3000;
const version = 'v1';

// --------- Routes -----------

// La page principale qui fourni des informations sur les URLs.
app.get("/", (req, res) => {
    res.json({
        urls: {
            all_dishes: `http://localhost:${PORT}/${version}/dishes`,
            a_dish: `http://localhost:${PORT}/${version}/dishes/:id`,
            ingredients: `http://localhost:${PORT}/${version}/dishes/:id/ingredients`,
            hot_to_make: `http://localhost:${PORT}/${version}/dishes/:id/howtomake`
        },
    });
});

// lister les plats
app.get(`/${version}/dishes`, (req, res) => {
    db.getAllDishes()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
});

// obtenir les info d'un plat
app.get(`/${version}/dishes/:id`, (req, res) => {
    const id = req.params.id;
    db.getDishById(id)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).json({ message: "Plat introuvable" });
            }
        })
        .catch(err => res.status(500).json(error));
});

// obtenir les ingrédients d'un plat
app.get(`/${version}/dishes/:id/ingredients`, (req, res) => {
    const id = req.params.id;
    db.getDishIngredients(id)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).json({ message: "Plat ou ingrédients introuvables" });
            }
        })
        .catch(err => res.status(500).json(error));
});

// obtenir les info de comment préparer un plat
app.get(`/${version}/dishes/:id/howtomake`, (req, res) => {
    const id = req.params.id;
    db.getHowToMake(id)
        .then(data => {
            if (data.length > 0) {
                res.json(data);
            } else {
                res.status(404).json({ message: "Préparation introuvable" });
            }
        })
        .catch(err => res.status(500).json(error));
});

app.listen(PORT, () => console.log(`Serveur écoute a http://localhost:${PORT}`));