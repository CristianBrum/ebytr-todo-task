const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const dbo = require('./connection');

const taskRoutes = require('./routes/taskRoutes');

const userRoutes = require('./routes/userRoutes');

app.use('/tasks', taskRoutes);

app.use('/users', userRoutes);

app.listen(PORT, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
});
