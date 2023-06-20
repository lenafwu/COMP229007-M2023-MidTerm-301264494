/* 
db.js
Fengting Wu
#301264494
Midterm test
*/

// write db credentials in .env file
require("dotenv").config();
const atlasDB = process.env.MONGODB_URL;

// Do not expose your credentials in your code.
/* let atlasDB =
  "mongodb+srv://<username>:<passoword>@<cluster>/carstore?retryWrites=true&w=majority"; */

// Database setup
let mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(atlasDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error:"));
  mongodb.once("open", () => {
    console.log("===> Connected to MongoDB.");
  });

  return mongodb;
};
