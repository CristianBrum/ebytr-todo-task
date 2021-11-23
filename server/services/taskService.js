const taskModel = require('../models/taskModel');

const createNewTask = async (task, data) => {
  const userId = data.id;
  const newTask = await taskModel.createNewTask(task, userId);
  return newTask;
};

const getAllTasks = async () => {
  const allTasks = await taskModel.getAllTasks();
  return allTasks;
};

const updateTask = async (id, task, data) => {
  const taskById = await taskModel.getTaskById(id);

  if (!taskById) {
    return {
      status: 404, error: true, message: 'Tarefa não encontrada', code: 'notFound',
    };
  }

  const idUser = data.id;

  if (taskById.userId === idUser || data.role === 'admin') {
    const result = await taskModel.updateTask(id, task);
    return { status: 200, result };
  }
  return {
    status: 401, error: true, message: 'Sem autorizacao', code: 'unauthorized',
  };
};

const deleteTask = async (id, data) => {
  const taskById = await taskModel.getTaskById(id);

  if (!taskById) {
    return {
      status: 404, error: true, message: 'Tarefa não encontrada', code: 'notFound',
    };
  }

  const idUser = data.id;

  if (taskById.userId === idUser || data.role === 'admin') {
    await taskModel.deleteTask(id);
    return { status: 204 };
  }
  return {
    status: 401, error: true, message: 'Tarefa não encontrada', code: 'unauthorized',
  };
};

module.exports = {
  createNewTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
