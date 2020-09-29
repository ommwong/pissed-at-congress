const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SECRET_KEY = process.env.SECRET_KEY

const authMiddleware = async (req, res, next) => {

  const authHeaders = req.headers['authorization'];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {

  } catch (err) {
    res.sendStatus(401);
  }

};

module.exports = authMiddleware;
