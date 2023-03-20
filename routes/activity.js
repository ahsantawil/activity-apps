const express = require('express');
const activityController = require('../controllers/activityController');
const router = express.Router();


/* GET home page. */
router.get('/', activityController.viewActivity);
// router.post('/', activityController.addActivity);

module.exports = router;
