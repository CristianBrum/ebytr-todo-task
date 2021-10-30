const conn = require('../connection');

const createNewTask = async (task) => {
  const db = await conn.connection();
  const newTask = await db.collection('tasks').insertOne({ task });
  return { _id: newTask.insertedId, task };
};

module.exports = {
  createNewTask,
};
