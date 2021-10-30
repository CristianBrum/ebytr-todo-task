const express = require('express');

const taskRoutes = express.Router();
const taskController = require('../controllers/taskcontroller');

taskRoutes.route('/task/add').post(taskController.createNewTask);

module.exports = taskRoutes;
