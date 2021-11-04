import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const login = () => {
    Axios.post('http://localhost:5000/login', {
      email,
      password,
    }).then((response) => {
      localStorage.setItem('token', (response.data.token));
      // eslint-disable-next-line no-underscore-dangle
      localStorage.setItem('userId', (response.data._id));
      history.push('/tasks');
    });
  };

  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="button" onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
