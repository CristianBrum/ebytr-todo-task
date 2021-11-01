const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const dbo = require('./connection');

const { user, login, task } = require('./routes');

app.use('/users', user);

app.use('/login', login);

app.use('/tasks', task);

app.listen(PORT, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
});
