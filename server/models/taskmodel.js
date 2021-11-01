const { ObjectId } = require('mongodb');
const conn = require('../connection');

const createNewTask = async (task, userId) => {
  const db = await conn.connection();
  const result = await db.collection('tasks')
    .insertOne({ task, userId });
  return { task: { task, userId, _id: result.insertedId } };
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

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await conn.connection();
  const result = await db.collection('tasks').findOneAndDelete({ _id: ObjectId(id) });
  return result;
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskByName,
  getTaskById,
  updateTask,
  deleteTask,
};
