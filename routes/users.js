const { response } = require('express');
var express = require('express');
var router = express.Router();

const userslist = require('../services/users-json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('templateUsers', {title: 'Users View', message: 'This is the main page of users view' });
});
router.get('/usersList', function(req, res, next) {
  res.render('templateUsers',{title: 'Users View',message: 'This is the list of users section!'});
});
router.get('/permissions', function(req, res, next) {
  res.render('templateUsers', {title: 'Users View', message: 'This is the permissions section!'});
});

router.get('/json-list', async function(req, res, next) {
  try{
      res.json(await userslist.getMultiple(req.query.page));
  }catch(err){
      console.error('Error'+err.message);
      next(err);

  }
});

module.exports = router;
