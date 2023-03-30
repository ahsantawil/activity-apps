const Activity = require("../models/Activity");
const Users = require("../models/Users");
const bcrypt = require('bcryptjs');

module.exports = {
        // Login
      signIn: async (req, res) => {
            try {
                  res.render('index', {
                      title: " SignIn ",
                  });
              } catch (err) {
                  res.redirect('/');
              } 
      },
      //logout  
      Logout: async (req, res) => {

      },

      // Dashboard
      viewDashboard: async (req, res) => {
            try {
                res.render('admin/dashboard/view_dashboard', {
                    title: " Activity | Dashboard ",
                });
            } catch (err) {
                res.redirect('/dashboard');
            }
      },

      // Activity
      viewActivity : async (req, res) => {
            try {
                // const activity = await Activity.find();
                res.render('admin/activity/add', {
                    // activity,
                    title: "ActivityCSI | Activity"
                });
            } catch (err) {
                req.flash('alertMessage', `${err.message}`)
                req.flash('alertStatus', 'danger')
                res.redirect('/activity');
            }
      },
    
      addActivity : async (req, res) => {
            try {
                res.redirect('/activity')
            } catch (err) {
                res.redirect('/activity')
            }
      },


      // Users
      viewUsers : async (req, res) => {
            try {
                const user = await Users.find();
                res.render('admin/users/view_users', {
                    user,
                    title: "ActivityCSI | Users"
                });
            } catch (err) {
                res.redirect('/users');
            }
      },
      
      viewAddUsers: async (req, res) => {
        try {
            res.render('admin/users/add', {
                title: 'ActivityCSI | Users Add'
            });
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/users')
        }
      },

      addUsers : async (req, res) => {
            try {
                const {fullname, username, email, 
                        department, job_level, password, gender, role} = req.body;
                const users = await Users({
                    fullname, username, email, 
                    department, job_level, password, 
                    gender, role
                    });
                const result = await users.save();
                req.flash('alertMessage', "Berhasil tambah users")
                req.flash('alertStatus', "success")
                res.redirect('/users');
            } catch (err) {
                res.redirect('/users')
            }
      },
    
      viewEditUsers : async (req, res) => {
            try {
                const { id } = req.params;
                const user = await Users.findOne({_id: id});
                res.render('admin/users/edit', {
                    user,
                    title: 'ActivityCSI | Users Edit'
                });
            } catch (err) {
                res.redirect('/users')
            }
      },

      editUsers : async (req, res) => {
            try {
                const { id } = req.params;
                const {fullname, username, email, 
                    department, job_level, gender, role} = req.body;

                    await Users.findOneAndUpdate({
                        _id: id
                    },{
                        fullname, username, email, 
                        department, job_level, gender, role
                    });
                res.redirect('/users');
            } catch (err) {
                res.redirect('/users')
            }
      },
    
      deleteUsers: async (req, res ) => {
            try {
                const { id } = req.params;

                await Users.findOneAndRemove({
                    _id: id
                });
                res.redirect('/users');
            } catch (err) {
                res.redirect('/users');
            }
      },


      // Report
      viewReport: async (req, res) => {
            try {
                res.render('admin/report/view_report', {
                    title: " Activity | report ",
                });
            } catch (err) {
                res.redirect('/report');
            }
      },

    
}