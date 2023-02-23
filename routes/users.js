const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/users/view_users', {title: 'users'});
});

module.exports = router;
