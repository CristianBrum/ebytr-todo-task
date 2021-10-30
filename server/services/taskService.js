const taskModel = require('../models/taskmodel');

const createNewTask = async (task) => {
  const newTask = await taskModel.createNewTask(task);
  return newTask;
};

module.exports = {
  createNewTask,
};
