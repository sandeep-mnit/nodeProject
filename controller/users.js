var user = require('../models/users.js');
function add(body){
    var myData = new user(body);
    myData.save()

    return myData;
}


module.exports = add;