const express = require('express');
const taskIsValid = require('../validations/taskValidation');

const taskRoutes = express.Router();
const taskController = require('../controllers/taskcontroller');

taskRoutes.post('/add',
  taskIsValid.checkSmallTask,
  taskIsValid.checkBigTask,
  taskIsValid.getTaskByName,
  taskController.createNewTask);

taskRoutes.get('/', taskController.getAllTasks);

module.exports = taskRoutes;
