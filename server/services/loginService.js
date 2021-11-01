const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const secret = 'super-senha';

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const createToken = async (email, password) => {
  if (!email || !password) {
    return { status: 401, message: 'All fields must be filled' };
  }

  const user = await userModel.getUserEmail(email);
  if (!user || user.password !== password) {
    return { status: 401, message: 'Incorrect username or password' };
  }

  const token = jwt.sign(user, secret, jwtConfig);

  return { status: 200, token };
};

module.exports = {
  createToken,
};
