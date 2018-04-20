var express = require ('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
const PORT = process.env.PORT || 3000

// TODO fix the MongoDB connect
// if you want to activate connection to MongoDB
// remove the following comment 
// MongoDD
//mongoose.connect('mongodb://localhost/timesheet');
//mongoose.connect('mongodb://user:password@ds151259.mlab.com:51259/worktime');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Create a simple router to be able to see this is working 

//Routes
app.use('/api', require('./routes/api'));

// Start server
//app.listen (3000);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
//console.log('server is listening on port 3000');
