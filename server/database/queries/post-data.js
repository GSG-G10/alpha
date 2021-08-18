const connection = require("../config/connection.js");
const postData = (textPost, linkImageUrl) => {
  return connection.query(
    `INSERT INTO posts (user_id, text, link_img, likes) VALUES (22 , '${textPost}', '${linkImageUrl}' , 0);`
  );
};
module.exports = postData;
