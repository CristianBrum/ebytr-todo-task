import axios from 'axios';

require('dotenv').config();

const urlBase = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/login`;

export const login = async (email, password, setError, history) => axios.post(urlBase, {
  email,
  password,
}).then((response) => {
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('userId', response.data._id);
  localStorage.setItem('name', response.data.name);
  history.push('/tasks');
}).catch(({ response }) => {
  if (response && response.data) {
    const data = response.data.message;
    setError(data);
  }
});

export const Nothing = {};
