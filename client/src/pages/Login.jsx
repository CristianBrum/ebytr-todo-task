import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TasksContext from '../context/TaskContext';
import { login } from '../services/LoginApi';

function Login() {
  const {
    email, setEmail, password, setPassword, error, setError,
  } = useContext(TasksContext);
  const history = useHistory();

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
        <button
          type="button"
          className="todo-button"
          onClick={() => login(email, password, setError, history)}
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
