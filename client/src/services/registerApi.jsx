import axios from 'axios';

require('dotenv').config();

const urlBase = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/register`;

export const newRegister = async (
  userNameReg,
  passwordReg,
  emailReg,
  setError,
  history,
) => axios
  .post(urlBase, {
    name: userNameReg,
    email: emailReg,
    password: passwordReg,
  })
  .then((response) => {
    if (response) {
      history.push('/login');
    }
  })
  .catch(({ response }) => {
    const data = response.data.message;
    setError(data);
  });

export const Nothing = {};
