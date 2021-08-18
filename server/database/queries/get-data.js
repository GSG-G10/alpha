const connection = require("/database/config/connection");

const getData = () => {
  return connection.query("SELECT * FROM posts;");
};

module.exports = getData;
