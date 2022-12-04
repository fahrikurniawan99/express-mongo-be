const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb+srv://fahri:tfiVdvnoT9qOaWUl@cluster0.f4hrube.mongodb.net/?retryWrites=true&w=majority');

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
