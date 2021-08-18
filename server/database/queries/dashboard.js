const connection = require("../config/connection");

const myDash = () => {
  return connection.query("SELECT * FROM posts;");
};

module.exports = myDash;
