//This is the main server entry point file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//starter code when database is connected
mongoose.connection.on('connected',()=>{
  console.log("connected to database: "+config.database);
})

//code run when database is in error
mongoose.connection.on('error',(err)=>{
  console.log("database error: "+err);
})

const app = express();

//CORS middleware
app.use(cors());

//Body parser middleware
app.use(bodyParser.json());

//set static folder path where Angular code is present
app.use(express.static(path.join(__dirname,'public')));

//Any path with users, like: localhost:3000/users, should go to users file
//that routing is done here
const users = require('./routes/users');
app.use('/users',users);

//Index route
app.get("/",(request,response)=>{
  response.send("Ideally you should not see this message. If you see this message, it means that there are issues with Angular UI!");
})

const port = 3000;

//Start server
app.listen(port,()=>{
  console.log("server started on port: "+port);
});
