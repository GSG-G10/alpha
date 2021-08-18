
const express = require('express')
const routerPages = express.Router();
const path = require('path')
const pagePost = require('./database/queries/post-page.js');



routerPages.get('/:id', (req, res) => {
    let id = req.params.id.split(':')[1]
    console.log(id);
  res.sendFile(path.join(__dirname,'..', 'views','post-page', 'index.html'))
});

routerPages.get('/dataid/:id', (req, res) => {
    let id = req.params.id.split(':')[1]
    pagePost(id)
    .then((data) => {
      res.json(data.rows);
    })
    .catch( (error) => {
      res.status(500).json({ msg: 'Internal server error' });
    });
})

  
module.exports = routerPages;
  