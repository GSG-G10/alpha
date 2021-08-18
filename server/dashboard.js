
const express = require('express')
const routerDashboard = express.Router();
const path = require('path')
const myDash = require('./database/queries/dashboard.js');


routerDashboard.get('/getdashboard', (req, res) => {
  myDash()
    .then((data) => {
      res.json(data.rows);
    })
    .catch( (error) => {
      res.status(500).json({ msg: 'Internal server error' });
    });
});
  
  
module.exports = routerDashboard;
  