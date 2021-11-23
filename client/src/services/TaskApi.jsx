import axios from 'axios';

require('dotenv').config();

const urlBase = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/tasks`;

const getAllTasks = async () => axios.get(urlBase)
  .catch(({ response }) => response && response.data);

const token = localStorage.getItem('token');

const postTask = async (newTasks) => axios
  .post(
    urlBase,
    { task: newTasks },
    {
      headers: { authorization: token },
    },
  )
  .catch(({ response }) => response && response.data);

const deleteTask = async (_id) => axios
  .delete(
    `${urlBase}/${_id}`,

    { headers: { authorization: token } },
  )
  .catch(({ response }) => response && response.data);

const updateTask = async (_id, newTasks) => axios
  .put(
    `${urlBase}/${_id}`,
    { task: newTasks },
    { headers: { authorization: token } },
  )
  .catch(({ response }) => response && response.data);

export {
  getAllTasks, postTask, deleteTask, updateTask,
};
