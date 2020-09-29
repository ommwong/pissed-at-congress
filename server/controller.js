const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');

const register = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email });

  if (user) {
    res.status(409);
    res.send('This email already exists')
  }
  const hashedPW = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPW
  })

  try {
    const { _id } = await User.create(newUser);
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    res.status(201).send({ accessToken });
  } catch (err) {
    res.status(401)
    res.send({ err: '401', message: 'Incorrect email or password' });
  }
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {

  } catch (err) {
    res.status(400);
    res.send({ err, message: 'Sorry, could not create user. Try again.' });
  }
};

module.exports = {
  login,
  register
};

