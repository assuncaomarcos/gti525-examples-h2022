const express = require('express');
const dishes = require('../controllers/dishes');
const routes = express.Router();
const apiVersion = 'v3';
const auth = require('../middleware/auth');

routes.route(`/${apiVersion}/dishes`)
    .get(auth, dishes.allDishes)
    .post(auth, dishes.insertDish);

routes.route(`/${apiVersion}/dishes/:id`)
    .get(dishes.dishById)
    .put(dishes.updateDish)
    .delete(dishes.deleteDish)

module.exports = routes;