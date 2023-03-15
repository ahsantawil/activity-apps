const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/users/view_users', {title: 'users'});
});
router.get('/add', function(req, res, next) {
  res.render('admin/users/add_users', {title: 'users'});
});
router.get('/edit', function(req, res, next) {
  res.render('admin/users/edit_users', {title: 'users'});
});

module.exports = router;
