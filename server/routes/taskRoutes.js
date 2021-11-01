const express = require('express');
const taskIsValid = require('../validations/taskValidation');

const taskRoutes = express.Router();
const taskController = require('../controllers/taskcontroller');

taskRoutes.get('/', taskController.getAllTasks);

taskRoutes.post('/add',
  taskIsValid.checkSmallTask,
  taskIsValid.checkBigTask,
  taskIsValid.getTaskByName,
  taskController.createNewTask);

taskRoutes.get('/:id',
  taskIsValid.checkTaskId,
  taskController.getTaskById);

taskRoutes.put('/:id',
  taskIsValid.checkSmallTask,
  taskIsValid.checkBigTask,
  taskIsValid.getTaskByName,
  taskIsValid.checkTaskId,
  taskController.updateTask);

taskRoutes.delete('/:id',
  taskIsValid.checkTaskId,
  taskController.deleteTask);

module.exports = taskRoutes;
