const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const secret = 'Ebytr@NewTask#2021';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = async (Email, password) => {
  if (!Email || !password) {
    return { status: 401, message: 'All fields must be filled' };
  }

  const user = await userModel.getUserEmail(Email);
  if (!user || user.password !== password) {
    return { status: 401, message: 'Incorrect username or password' };
  }

  const { _id, email, role } = user;
  const userWithoutPassword = {
    id: _id,
    email,
    role,
  };

  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

  return { status: 200, token };
};

module.exports = {
  createToken,
};
