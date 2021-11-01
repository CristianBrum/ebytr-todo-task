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

const updateTask = async (_id, task) => {
  const result = await taskModel.updateTask(_id, task);
  return result.value;
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTask,
};
