const Users = require('../models/Users');

module.exports = {
    viewUsers : async (req, res) => {
        try {
            // const activity = await Activity.find();
            res.render('admin/users/view_users', {
                // activity,
                title: "ActivityCSI | Users"
            });
        } catch (error) {
            res.redirect('/users');
        }
    },

    addUsers : async (req, res) => {
        try {
            res.render('admin/users/add_users', {
                title: 'ActivityCSI | Users Add'
            });
        } catch (error) {
            res.redirect('/users')
        }
    },

    editUsers : async (req, res) => {
        try {
            res.render('admin/users/edit_users', {
                title: 'ActivityCSI | Users Edit'
            });
        } catch (error) {
            res.redirect('/users')
        }
    },

}