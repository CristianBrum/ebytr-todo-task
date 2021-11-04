import React, { useState } from 'react';
import Axios from 'axios';

function Register() {
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const register = () => {
    Axios.post('http://localhost:5000/register', {
      name: userNameReg,
      password: passwordReg,
      email: emailReg,
    }).then((response) => {
      if (response) {
        window.location.href = 'http://localhost:3000/login';
      }
    });
  };

  return (
    <>
      <form className="todo-form form-logReg">
        <h1>Cadastre-se</h1>
        <input
          className="todo-input"
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setUserNameReg(e.target.value);
          }}
        />
        <input
          type="text"
          className="todo-input"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <input
          type="password"
          className="todo-input"
          placeholder="Senha"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button type="button" className="todo-button" onClick={register}>
          Cadastre-se
        </button>
      </form>
    </>
  );
}

export default Register;
