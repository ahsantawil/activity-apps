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
              } catch (error) {
                  res.redirect('/');
              } 
      },
      //logout
      Logout: async (req, res) => {

      },

      // Dashboard
      viewDashboard: async (req, res) => {
            try {
                const alertMessage = req.flash("alertMessage")
                const alertStatus = req.flash("alertStatus")

                const alert = { message: alertMessage, status: alertStatus}
                res.render('admin/dashboard/view_dashboard', {
                    title: " Activity | Dashboard ",
                });
            } catch (err) {
                req.flash('alertMessage', `${err.message}`)
                req.flash('alertStatus', 'danger')
                res.redirect('/dashboard');
            }
      },

      // Activity
      viewActivity : async (req, res) => {
            try {
                // const activity = await Activity.find();
                res.render('admin/activity/add_activity', {
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
                res.redirect('/admin/activity/add')
            } catch (error) {
                res.redirect('/admin/activity/add')
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
            } catch (error) {
                res.redirect('/admin/users');
            }
      },
      
      viewAddUsers: async (req, res) => {
        try {
            res.render('admin/users/add', {
                title: 'ActivityCSI | Users Add'
            });
        } catch (error) {
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
      },


      // Report
      viewReport: async (req, res) => {
            try {
                res.render('admin/report/view_report', {
                    title: " Activity | report ",
                });
            } catch (error) {
                res.redirect('/report');
            }
      },

    
}