const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/register',(req,res,next)=>{
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser,(err,user)=>{
    if(err){
      res.json({success:false, msg:'Failed to register user'});
    }else{
      res.json({success:true, msg: 'Registered user'});
    }
  })
});

router.post('/authenticate',(req,res,next)=>{
  res.send('Authenticate');
});

router.get('/profile',(req,res,next)=>{
  res.send('Profile');
})
//Not needed
/*router.get('/',(req,res,next)=>{
  res.send('Users base page');
})*/

module.exports=router;
