const Activity = require('../models/Activity');

module.exports = {
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

}