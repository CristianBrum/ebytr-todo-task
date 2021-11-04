import React, { useState } from 'react';
import Axios from 'axios';

function Register() {
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const register = () => {
    Axios.post('http://localhost:5000/users/register', {
      name: userNameReg,
      password: passwordReg,
      email: emailReg,
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
