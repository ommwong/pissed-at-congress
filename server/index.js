const express = require('express');
const app = express();
const router = require('./router');
const session = require('express-session');
const cors = require('cors');


const corsConfig = {
  origin: 'http://localhost:19003',
  credentials: true,
};

app.use(express.json());
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`JWT Server running on http://localhost:${port}/ 👍👍👍`);
})