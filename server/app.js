/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
const express = require('express')
const router = express.Router();
const path = require('path')
const getData = require('/database/queries/get-data.js');
const postData = require('./database/queries/post-data.js');
const addLikes = require('./database/queries/add-likes.js');


router.use(express.static(path.join(__dirname, '..', 'views')));

// router.get('/', (req, res) => {
//   res.send('home page');
// });
router.get('/getusers', (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch( (error) => {
      res.status(500).json({ msg: 'Internal server error' });
    });
});

router.post('/add-post', (req, res) => {
  console.log(req.body);
  const { textPost, linkImage, linkImageUrl } = req.body;
  postData(textPost, linkImageUrl)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      res.status(500).json({ msg: 'Internal server error' });
    });
  res.redirect('/');
});
router.post('/add-love/id/:id', (req, res) => {
  let id = req.params.id.split(':')[1]
  addLikes(id)
});


router.post('/info-post', (req, res) => {});
module.exports = router;
