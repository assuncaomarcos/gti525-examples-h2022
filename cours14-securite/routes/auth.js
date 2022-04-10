const express = require('express');
const users = require('../controllers/users');
const routes = express.Router();
const apiVersion = 'v3';

routes.route(`/${apiVersion}/signup`)
    .post(users.signup);

routes.route(`/${apiVersion}/login`)
    .post(users.login);

module.exports = routes;