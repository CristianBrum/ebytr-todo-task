const { ObjectId } = require('mongodb');
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

const getTaskByName = async (task) => {
  const db = await conn.connection();
  const getByName = await db.collection('tasks').findOne({ task });
  if (!getByName) return null;
  return getByName;
};

const getTaskById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await conn.connection();
  const getById = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  return getById;
};

const updateTask = async (id, task) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await conn.connection();
  const result = db.collection('tasks')
    .findOneAndUpdate({ _id: ObjectId(id) },
      { $set: { task } }, { returnOriginal: false });
  return result;
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskByName,
  getTaskById,
  updateTask,
};
