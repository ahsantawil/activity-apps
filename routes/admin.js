const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');

//Sigin
router.get('/', adminController.viewSignIn);
router.post('/', adminController.actionSignIn);
router.use(auth);
router.get('/logout', adminController.Logout);

/* GET home page. */
router.get('/dashboard', adminController.viewDashboard);

//activity route
router.get('/activity', adminController.viewActivity);
router.post('/activity', adminController.addActivity);

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
