const express = require('express');
const bodyparser = require('body-parser');

//initialize console-stamp
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

//initalize app
const app = express();
const port = 8080;

//use body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


//start listening to port
app.listen(port,()=>{
    console.log("program is running at port 8080");
})

