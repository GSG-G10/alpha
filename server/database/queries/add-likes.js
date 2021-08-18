const connection = require("../config/connection.js");


const updateLikes =  (id) => {
  return connection.query(
  `SELECT likes FROM posts WHERE id = ${id};`
  );
};


const addLikes = async (id)=>{
  let getLike =await updateLikes(id)
  let like = getLike.rows[0].likes
  like++
  console.log(like);
  return connection.query(
    `UPDATE posts SET likes = ${like} WHERE id = ${id};`
  );
}

module.exports = addLikes;
