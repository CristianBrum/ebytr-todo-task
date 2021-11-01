const taskService = require('../services/taskService');

const createNewTask = async (req, res) => {
  const { task } = req.body;
  const { data } = req.userInfo;

  const { status, newTask } = await taskService.createNewTask(task, data);

  return res.status(status).json(newTask);
};

const getAllTasks = async (_req, res) => {
  const { status, allTasks } = await taskService.getAllTasks();
  return res.status(status).json(allTasks);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const { status, task, message } = await taskService.getTaskById(id);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { data } = req.userInfo;
  const { status, result, message } = await taskService.updateTask(id, req.body, data);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(result);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { data } = req.userInfo;

  const { status, message } = await taskService.deleteTask(id, data);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json();
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
