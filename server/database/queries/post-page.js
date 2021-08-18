const connection = require("../config/connection.js");
const pagePost =  (id) => {
  return connection.query(
  `SELECT * FROM posts WHERE id=${id};`
  );
};
module.exports = pagePost;
