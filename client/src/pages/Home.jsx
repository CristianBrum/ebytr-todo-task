import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <Link to="/register">
          <button type="button">Registrar</button>
        </Link>
        <Link to="/login">
          <button type="button">Logar</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
