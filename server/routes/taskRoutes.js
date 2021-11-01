const express = require('express');
const taskIsValid = require('../validations/taskValidation');

const taskRoutes = express.Router();
const taskController = require('../controllers/taskcontroller');

taskRoutes.post('/add',
  taskIsValid.checkSmallTask,
  taskIsValid.checkBigTask,
  taskIsValid.getTaskByName,
  taskController.createNewTask);

taskRoutes.get('/:id', taskController.getTaskById);

taskRoutes.get('/', taskController.getAllTasks);

taskRoutes.put('/:id', taskController.updateTask);

taskRoutes.delete('/:id', taskController.deleteTask);

module.exports = taskRoutes;
