const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const router = express.Router();

/* GET home page. */
router.get('/', dashboardController.viewDashboard);

module.exports = router;
