const taskService = require('../services/taskService');

const createNewTask = async (req, res) => {
  const { task } = req.body;
  const newTask = await taskService.createNewTask(task);
  return res.status(201).json(newTask);
};

const getAllTasks = async (_req, res) => {
  const allTasks = await taskService.getAllTasks();
  return res.status(200).json(allTasks);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const getById = await taskService.getTaskById(id);
  return res.status(200).json(getById);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const result = await taskService.updateTask(id, task);

  return res.status(200).json(result);
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTask,
};
