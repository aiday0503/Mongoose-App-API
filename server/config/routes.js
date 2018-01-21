var user = require('../controllers/users');
var mongoose = require('mongoose');

module.exports = function(app) {
    app.get('/', function(req, res) {
        user.showAll(req, res)
    });

    app.get('/new/:name', function(req, res) {
        var id = req.params.id;
        user.create(req, res, id)
    });
    app.get('/remove/:name', function(req, res) {
        var id = req.params.id;
        user.remove(req, res, id)
    });
    app.get('/:name', function(req, res) {
        var id = req.params.id;
        user.show(req, res, id)
    });
}