const express = require('express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
