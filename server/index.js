const express = require('express');
const app = express();
const router = require('./router');
const session = require('express-session');
const cors = require('cors');
const db = require('./models/db');

const corsConfig = {
  origin: 'http://localhost:19003',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

const SERVER_PORT = process.env.SERVER_PORT || 3001;

(async () =>{
  try {
    await db.sequelize.sync();
    app.listen(SERVER_PORT);
    console.log(`Server listening on port ${SERVER_PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();