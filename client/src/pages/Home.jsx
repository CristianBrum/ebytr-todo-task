import { useHistory } from 'react-router-dom';
import React from 'react';

function Home() {
  const history = useHistory();

  return (
    <>
      <container className="home-page">
        <h1>Bem Vindo!</h1>
        <div className="btn-home">
          <button
            type="button"
            onClick={() => {
              history.push('/register');
            }}
            className="todo-button"
          >
            Criar Nova Conta
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/login');
            }}
            className="todo-button"
          >
            Logar
          </button>
        </div>
      </container>
    </>
  );
}

export default Home;
