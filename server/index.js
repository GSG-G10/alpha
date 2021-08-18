/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const app = express();
const router = require('./app');
const dashboard = require('./dashboard');
const postPage = require('./post-page');
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'views'), { maxAge: '30d' }));
app.use(express.static(path.join(__dirname, '..', 'views', 'dashboard'), { maxAge: '30d' }));
app.use(express.static(path.join(__dirname, '..', 'views', 'post-page'), { maxAge: '30d' }));
app.use(express.static(path.join(__dirname, './database'), { maxAge: '30d' }));
app.use('/', router);
app.use('/dashboard', dashboard);
app.use('/page', postPage);
app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`server is run at http://localhost:${app.get('port')}`);
});
