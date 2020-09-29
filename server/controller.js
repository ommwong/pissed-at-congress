const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const db = require('./models/db');
const SECRET_KEY = 'mysequelkey';

const register = async (req, res) => {
  console.log("register")
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = await db.User.findOne({where: {email: email }});
  console.log(user)
  if (user) {
    res.status(409);
    res.send('This email already exists')
  } else {
    const hashedPW = await bcrypt.hash(password, 10);
    try {
      const { _id } = await db.User.create({
        name,
        email,
        password: hashedPW
      });
      const accessToken = jwt.sign({ _id }, SECRET_KEY);
      res.status(201).send({ accessToken });
    } catch (err) {
      console.log(err)
      res.status(401)
      res.send({ err: '401', message: 'Sorry, could not create user. Try again.' });
    }
  }

};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    res.status(200).send({ accessToken });
  } catch (err) {
    res.status(400);
    res.send({ err, message: 'Sorry, wrong username or password!' });
  }
};

module.exports = {
  login,
  register
};

