const express = require('express');
const rescue = require('express-rescue');
const taskIsValid = require('../validations/taskValidation');

const taskRoutes = express.Router();
const taskController = require('../controllers/taskcontroller');

taskRoutes.get('/', taskController.getAllTasks);

taskRoutes.post('/add',
  taskIsValid.checkSmallTask,
  taskIsValid.checkBigTask,
  taskIsValid.getTaskByName,
  rescue(taskController.createNewTask));

taskRoutes.get('/:id',
  taskIsValid.checkTaskId,
  rescue(taskController.getTaskById));

taskRoutes.put('/:id',
  taskIsValid.checkSmallTask,
  taskIsValid.checkBigTask,
  taskIsValid.getTaskByName,
  taskIsValid.checkTaskId,
  rescue(taskController.updateTask));

taskRoutes.delete('/:id',
  taskIsValid.checkTaskId,
  rescue(taskController.deleteTask));

module.exports = taskRoutes;
