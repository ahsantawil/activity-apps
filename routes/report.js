const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/report/view_report', { title: 'Report' });
});

module.exports = router;
