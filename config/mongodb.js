require('dotenv').config()
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URL);

(async () => {
  try {
    await client.connect();
    console.log("connection success.");
  } catch (error) {
    console.log(error);
  }
})();

const db = client.db("eduwork-native");

module.exports = db;
