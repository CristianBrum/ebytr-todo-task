const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const {
    status, token, message, _id,
  } = await loginService.createToken(email, password);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ token, _id });
};

module.exports = {
  login,
};
