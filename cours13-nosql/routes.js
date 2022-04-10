const express = require('express');
const controller = require('./controller');
const routes = express.Router();
const apiVersion = 'v2';

routes.route(`/${apiVersion}/dishes`).get(controller.getAllDishes);
routes.route(`/${apiVersion}/dishes`).post(controller.insertDish);
routes.route(`/${apiVersion}/dishes/:id`).get(controller.getDishById);
routes.route(`/${apiVersion}/dishes/:id`).put(controller.updateDish);
routes.route(`/${apiVersion}/dishes/:id`).delete(controller.deleteDish);

module.exports = routes;