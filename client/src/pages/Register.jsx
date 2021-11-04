import React, { useState } from 'react';
import Axios from 'axios';

// import { useHistory } from 'react-router-dom';

// const history = useHistory();

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
      <div className="Registation">
        <h1>Registration</h1>
        <input
          type="text"
          onChange={(e) => {
            setUserNameReg(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button type="button" onClick={register}>
          Register
        </button>
      </div>
    </>
  );
}

export default Register;
