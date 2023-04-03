const Activity = require("../models/Activity");
const Users = require("../models/Users");
const bcrypt = require('bcryptjs');

module.exports = {
        // Login
      viewSignIn: async (req, res) => {
            try {
                const alertMessage = req.flash('alertMessage');
                const alertStatus = req.flash('alertStatus');
                const alert = { message: alertMessage, status: alertStatus };
                if (req.session.user == null || req.session.user == undefined) {
                    res.render('index', {
                        alert,
                        title: " SignIn ",
                    });
                } else {
                    res.redirect('/dashboard');
                } 
              } catch (err) {
                  res.redirect('/');
              } 
      },

      actionSignIn: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Users.findOne({ username: username });
            if (!user) {
                req.flash('alertMessage', 'User yang anda masukan tidak ada!!');
                req.flash('alertStatus', 'danger');
                res.redirect('/');
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                req.flash('alertMessage', 'Password yang anda masukan tidak cocok!!');
                req.flash('alertStatus', 'danger');
                res.redirect('/');
            }

            req.session.user = {
                id: user.id,
                username: user.username,
                fullname: user.fullname,
                department: user.department
            }

            res.redirect('/dashboard');
        } catch (err) {
            res.redirect('/');
        }
      },

      //logout  
      Logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/');
      },

      // Dashboard
      viewDashboard: async (req, res) => {
            try {
                const activity = await Activity.find();
                res.render('admin/dashboard/view_dashboard', {
                    title: " Activity | Dashboard ",
                    user: req.session.user,
                    activity,
                });
            } catch (err) {
                res.redirect('/dashboard');
            }
      },

      // Activity
      viewActivity : async (req, res) => {
            try {
                const alertMessage = req.flash('alertMessage');
                const alertStatus = req.flash('alertStatus');
                const alert = { message: alertMessage, status: alertStatus };
                res.render('admin/activity/add', {
                    title: "ActivityCSI | Activity",
                    alert,
                    user: req.session.user
                });
            } catch (err) {
                res.redirect('/activity');
            }
      },
    
      addActivity : async (req, res) => {
            try {
                const { fullname, department, activityDate, desc, jobType, 
                        cases, action, location, solving, status, pic, position, phone, remaks } = req.body;
                const activity = await Activity.create({
                    fullname, department, activityDate, desc, jobType, cases, action, 
                    location, solving, status, pic, position, phone, remaks
                });
                req.flash('alertMessage', 'Success Add New Activity');
                req.flash('alertStatus', 'success');
                res.redirect('/activity')
            } catch (err) {
                req.flash('alertMessage', `${err.message}`);
                req.flash('alertStatus', 'danger');
                res.redirect('/activity')
            }
      },


      // Users
      viewUsers : async (req, res) => {
            try {
                const users = await Users.find();
                const alertMessage = req.flash('alertMessage');
                const alertStatus = req.flash('alertStatus');
                const alert = { message: alertMessage, status: alertStatus };
                res.render('admin/users/view_users', {
                    title: "ActivityCSI | Users",
                    alert,
                    users,
                    user: req.session.user
                });
            } catch (err) {
                res.redirect('/users');
            }
      },
      
      viewAddUsers: async (req, res) => {
        try {
            res.render('admin/users/add', {
                user: req.session.user,
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
                const { fullname, username, email, department, job_level, password, gender, role } = req.body;
                const users = await Users({ fullname, username, email, department, job_level, password,gender, role });
                const result = await users.save();

                req.flash('alertMessage', "Berhasil tambah users");
                req.flash('alertStatus', "success");
                res.redirect('/users');
            } catch (err) {
                req.flash('alertMessage', `${err.message}`);
                req.flash('alertStatus', 'danger');
                res.redirect('/users');
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
                const { id, fullname, username, email, department, job_level, gender, role} = req.body;
                const users = await Users.findOne({_id: id});
                        users.fullname = fullname;
                        users.username = username; 
                        users.email = email; 
                        users.department = department; 
                        users.job_level = job_level; 
                        users.gender = gender; 
                        users.role = role;
                await users.save();

                req.flash('alertMessage', 'Success Update Users');
                req.flash('alertStatus', 'success');
                res.redirect('/users');
            } catch (err) {
                req.flash('alertMessage', `${err.message}`);
                req.flash('alertStatus', 'danger');
                res.redirect('/users')
            }
      },
    
      deleteUsers: async (req, res ) => {
            try {
                const { id } = req.params;
                const users = await Users.findOne({_id: id});
                    await users.remove();
                req.flash('alertMessage', 'Success Delete Users');
                req.flash('alertStatus', 'success');
                res.redirect('/users');
            } catch (err) {
                req.flash('alertMessage', `${err.message}`);
                req.flash('alertStatus', 'danger');
                res.redirect('/users');
            }
      },


      // Report
      viewReport: async (req, res) => {
            try {
                res.render('admin/report/view_report', {
                    title: " Activity | report ",
                    user: req.session.user
                });
            } catch (err) {
                res.redirect('/report');
            }
      },

    
}