const taskModel = require('../models/taskmodel');

const createNewTask = async (task) => {
  const newTask = await taskModel.createNewTask(task);
  return newTask;
};

const getAllTasks = async () => taskModel.getAllTasks();

const getTaskById = async (id) => {
  const result = await taskModel.getTaskById(id);
  return result;
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskById,
};
