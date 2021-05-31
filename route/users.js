// var express = require('express');
// var router = express.Router();

var router = require('express').Router();
var add = require('../controller/users.js');

router.post('/user', (req,res)=>{
    console.log("inside post method");
    console.log(req.body)
    try {
        myData = add(req.body);
            res.send("This item has been saved : " + myData);
    } catch (error) {
            res.send("This item has not been saved : " + error);
    }
    

})

module.exports = router;