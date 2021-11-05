const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const secret = 'Ebytr@NewTask#2021';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = async (Email, password) => {
  if (!Email || !password) {
    return { status: 401, message: 'Preencha todos os campos' };
  }

  const user = await userModel.getUserEmail(Email);
  if (!user || user.password !== password) {
    return { status: 401, message: 'Usuário ou senha Inválidos' };
  }

  const {
    _id, email, role, name,
  } = user;
  const userWithoutPassword = {
    id: _id,
    email,
    role,
    name,
  };

  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

  return {
    status: 200, token, _id, name,
  };
};

module.exports = {
  createToken,
};
