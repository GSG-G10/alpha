const connection = require("../config/connection");

const getData = () => {
  return connection.query("SELECT * FROM posts;");
};

module.exports = getData;
