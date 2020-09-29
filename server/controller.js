const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
};

const register = (req, res) => {

};

module.exports = {
  login,
  register
};

