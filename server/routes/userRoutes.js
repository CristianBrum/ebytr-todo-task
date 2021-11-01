const express = require('express');
const rescue = require('express-rescue');

const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.post('/',
  rescue(userController.createNewUser));

module.exports = userRoutes;
