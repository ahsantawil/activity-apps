const Activity = require("../models/Activity");
const Users = require("../models/Users");
const bcrypt = require('bcryptjs');

module.exports = {
      signIn: async (req, res) => {
            try {
                  res.render('index', {
                      title: " SignIn ",
                  });
              } catch (error) {
                  res.redirect('/');
              } 
      },
      viewDashboard: async (req, res) => {
            try {
                res.render('admin/dashboard/view_dashboard', {
                    title: " Activity | Dashboard ",
                });
            } catch (error) {
                res.redirect('/dashboard');
            }
      },

      viewActivity : async (req, res) => {
            try {
                // const activity = await Activity.find();
                res.render('admin/activity/add_activity', {
                    // activity,
                    title: "ActivityCSI | Activity"
                });
            } catch (error) {
                res.redirect('/activity');
            }
      },
    
      addActivity : async (req, res) => {
            try {
                res.redirect('/admin/activity/add_activity')
            } catch (error) {
                res.redirect('/admin/activity/add_activity')
            }
      },

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
      },

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