const taskService = require('../services/taskService');

const getAllTasks = async (_req, res) => {
  const allTasks = await taskService.getAllTasks();
  return res.status(200).json(allTasks);
};

const createNewTask = async (req, res) => {
  const { task } = req.body;
  const { data } = req.userInfo;

  const newTask = await taskService.createNewTask(task, data);
  return res.status(201).json(newTask);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { data } = req.userInfo;
  const { message, status, result } = await taskService.updateTask(id, req.body, data);

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
  updateTask,
  deleteTask,
};
