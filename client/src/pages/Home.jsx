import React from 'react';

function Home() {
  return (
    <>
      <container className="home-page">
        <h1>Bem Vindo!</h1>
        <div className="btn-home">
          <button
            type="button"
            onClick={() => {
              window.location = 'http://localhost:3000/register';
            }}
            className="todo-button"
          >
            Criar Nova Conta
          </button>
          <button
            type="button"
            onClick={() => {
              window.location = 'http://localhost:3000/login';
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
