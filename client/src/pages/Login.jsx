import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const login = () => {
    Axios.post('http://localhost:5000/login', {
      email,
      password,
    }).then((response) => {
      localStorage.setItem('token', response.data.token);
      // eslint-disable-next-line no-underscore-dangle
      localStorage.setItem('userId', response.data._id);
      localStorage.setItem('name', response.data.name);
      history.push('/tasks');
    }).catch((err) => {
      const data = err.response.data.message;
      setError(data);
    });
  };

  return (
    <>
      <h1>Fazer Login</h1>
      <form className="todo-form form-logReg">
        <input
          type="text"
          className="todo-input"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="todo-input"
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="alert-error">{error}</div>
        <button type="button" className="todo-button" onClick={login}>
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
