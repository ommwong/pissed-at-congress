const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {

  } catch (err) {
    res.status(400);
    res.send({ err, message: 'Sorry, could not create user. Try again.' });
  }
};

const register = async (req, res) => {
  try {

  } catch (err) {
    res.status(401)
    res.send({ err: '401', message: 'Incorrect email or password' });
  }
};

module.exports = {
  login,
  register
};

