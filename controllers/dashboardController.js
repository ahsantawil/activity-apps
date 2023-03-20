const Activity = require('../models/Activity');

module.exports = {
    viewDashboard: async (req, res) => {
        try {
            res.render('admin/dashboard/view_dashboard', {
                title: " Activity | Dashboard ",
            });
        } catch (error) {
            res.redirect('/dashboard');
        }
    }

}