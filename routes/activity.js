const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/activity/form_activity', { title : 'activity'});
});

module.exports = router;
