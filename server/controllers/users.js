var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function(req, res) {
        User.create({ name: req.params.name }, function(err, user) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(user)
            }

        })
    },
    showAll: function(req, res) {
        User.find({}, function(err, user) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(user)
            }
        })
    },
    remove: function(req, res) {
        User.remove({ name: req.params.name }, function(err, user) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(user)
            }

        })
    },
    show: function(req, res) {
        User.find({ name: req.params.name }, function(err, user) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(user)
            }
        })
    }

}