import { postTask, deleteTask, updateTask } from '../services/TaskApi';

export const createNewTask = async (newTasks) => {
  await postTask(newTasks);
};

export const delTask = async (_id) => {
  await deleteTask(_id);
};

export const putTask = async (_id, newTasks) => {
  await updateTask(_id, newTasks);
};
