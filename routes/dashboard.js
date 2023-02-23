const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/dashboard/view_dashboard', { title : 'dashboard'});
});

module.exports = router;
