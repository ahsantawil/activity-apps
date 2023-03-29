const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//Sigin
router.get('/', adminController.signIn)

/* GET home page. */
router.get('/dashboard', adminController.viewDashboard);

//activity route
router.get('/activity', adminController.viewActivity);

//user route
router.get('/users', adminController.viewUsers);
router.get('/users/add', adminController.viewAddUsers);
router.post('/users', adminController.addUsers);
router.get('/users/edit/:id', adminController.viewEditUsers);
router.put('/users/:id', adminController.editUsers);
router.delete('/users/:id', adminController.deleteUsers);

//Report route
router.get('/report', adminController.viewReport);

module.exports = router;
