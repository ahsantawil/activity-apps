const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* GET users listing. */
router.get('/', usersController.viewUsers);
router.get('/add', usersController.addUsers);
router.get('/edit', usersController.editUsers);

module.exports = router;
