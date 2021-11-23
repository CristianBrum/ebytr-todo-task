import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TasksContext from '../context/TaskContext';

import { newRegister } from '../services/registerApi';

function Register() {
  const {
    userNameReg,
    setUserNameReg,
    passwordReg,
    setPasswordReg,
    emailReg,
    setEmailReg,
    setError,
    error,
  } = useContext(TasksContext);
  const history = useHistory();

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
        <div className="alert-error">{error}</div>
        <button
          type="button"
          className="todo-button"
          onClick={() => {
            newRegister(userNameReg, emailReg, passwordReg, setError, history);
          }}
        >
          Cadastre-se
        </button>
      </form>
    </>
  );
}

export default Register;
