const taskService = require('../services/taskService');

const createNewTask = async (req, res) => {
  const { task } = req.body;
  const result = await taskService.createNewTask(task);

  return res.status(201).json(result);
};

module.exports = {
  createNewTask,
};
