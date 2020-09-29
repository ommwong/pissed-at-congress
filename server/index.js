const express = require('express');
const app = express();
const router = require('./router');
const session = require('express-session');
const cors = require('cors');

const corsConfig = {
  origin: 'http://localhost:19003',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

const SERVER_PORT = process.env.SERVER_PORT || 3001;
app.listen(SERVER_PORT, () => {
  console.log(`JWT Server running on http://localhost:${SERVER_PORT}/ 👍👍👍`);
})