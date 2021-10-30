const express = require('express');

const taskRoutes = express.Router();
const taskController = require('../controllers/taskcontroller');

taskRoutes.route('/task/add').post(taskController.createNewTask);

taskRoutes.route('/task').get(taskController.getAllTasks);

module.exports = taskRoutes;
