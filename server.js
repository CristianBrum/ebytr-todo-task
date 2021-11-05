const express = require('express');
const cors = require('cors');
const path = require('path');
const { user, login, task } = require('./routes');

require('dotenv').config({ path: './config.env' });

const app = express();
app.use(express.json());
app.use(cors());

const { connectToServer } = require('./connection');

connectToServer();

app.use('/register', user);

app.use('/login', login);

app.use('/tasks', task);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('rodando');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));