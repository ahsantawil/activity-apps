const Users = require('../models/Users');

module.exports = {
    viewUsers : async (req, res) => {
        try {
            const user = await Users.find();
            res.render('admin/users/view_users', {
                user,
                title: "ActivityCSI | Users"
            });
        } catch (error) {
            res.redirect('/admin/users');
        }
    },

    addUsers : async (req, res) => {
        try {
            const {fullname, username, email, 
                    department, job_level, password, gender, role} = req.body;
            const result = await Users.create({
                fullname, username, email, 
                department, job_level, password, 
                gender, role
                });
            res.redirect('/users', {
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

    deleteUsers: async (req, res ) => {
        try {
            
        } catch (error) {
            
        }
    }

}