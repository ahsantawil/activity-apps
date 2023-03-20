const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.viewUsers);
router.post('/add', usersController.addUsers);
router.put('/edit/:id', usersController.editUsers);
router.delete('/:id', usersController.editUsers);

module.exports = router;
