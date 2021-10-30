const conn = require('../connection');

const createNewTask = async (task) => {
  const db = await conn.connection();
  if (!task) return null;
  const newTask = await db.collection('tasks').insertOne({ task });
  return { _id: newTask.insertedId, task };
};

const getAllTasks = async () => {
  const db = await conn.connection('ebytr_tasks');
  const allTasks = await db.collection('tasks').find().toArray();
  return ({ tasks: allTasks });
};

module.exports = {
  createNewTask,
  getAllTasks,
};
