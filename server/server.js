const express = require('express');

const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { user, login, task } = require('./routes');

app.use('/register', user);

app.use('/login', login);

app.use('/tasks', task);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
