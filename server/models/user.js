// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
        name: String,
        date: Number
    })
    // register the schema as a model
var User = mongoose.model('User', UserSchema);