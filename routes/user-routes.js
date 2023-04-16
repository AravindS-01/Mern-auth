
const express = require('express');

const routes = express.Router();
const {signup} = require('../controllers/user-controller');
const {login} = require('../controllers/user-controller');

routes.post('/signup', signup );

routes.post('/login',login);

module.exports = routes;