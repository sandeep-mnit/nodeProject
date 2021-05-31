var mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sandeep:sandeep1234@cluster0.rytxp.mongodb.net/Test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true});

// DEFINE MONGOOSE SCHEMA
var userSchema = new mongoose.Schema({
    name : String,
    phone : String,
    email : String,
});

var user = mongoose.model('User', userSchema);


module.exports = user;