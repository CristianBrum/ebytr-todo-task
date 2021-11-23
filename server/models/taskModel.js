const { ObjectId } = require('mongodb');
const connection = require('../connection');

const createNewTask = async (task, userId) => {
  const db = await connection();
  if (!task) return null;

  return db.collection('tasks')
    .insertOne({ task, userId })
    .then(({ insertedId }) => ({ _id: insertedId, task, userId }));
};

const getAllTasks = async () => {
  const db = await connection('ebytr_tasks');
  return db.collection('tasks').find().toArray();
};

const getTaskById = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) return null;
  return db.collection('tasks').findOne(ObjectId(id));
};

const updateTask = async (id, task) => {
  const db = await connection();
  await db.collection('tasks').findOneAndUpdate({ _id: ObjectId(id) }, { $set: task });
  return { _id: id, task };
};

const deleteTask = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) return null;
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return null;
};

module.exports = {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
