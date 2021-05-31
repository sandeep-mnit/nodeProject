const express = require("express");
const path = require("path");
const app = express();
const bodyparser  = require("body-parser");
const port = 8000;

var route = require('./route/users.js');


//EXPRESS SPECIFIC STUFF
app.use('/public', express.static('public')); // For serving static files
app.use(express.urlencoded());
app.use(bodyparser.json());
app.use(route);


// START THE SERVER

app.listen(port, ()=>{
    console.log(`The application started successfully on port no ${port}`);
})