const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.ATLAS_URI;
const DB_NAME = 'ebytr_tasks';

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = connection;

// DB LOCAL CONFIG
// const { MongoClient } = require('mongodb');
// require('dotenv').config();

// const OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const MONGO_DB_URL = `mongodb://${process.env.DB_HOST}:27017/ebytr_tasks`;
// const DB_NAME = 'ebytr_tasks';

// let db = null;

// const connection = () => (db
//   ? Promise.resolve(db)
//   : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//       db = conn.db(DB_NAME);
//       return db;
//     }));

// module.exports = connection;
