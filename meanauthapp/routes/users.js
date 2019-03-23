const express = require('express');
const router = express.Router();

router.get('/register',(req,res,next)=>{
  res.send('Register');
});

router.post('/authenticate',(req,res,next)=>{
  res.send('Authenticate');
});

router.get('/profile',(req,res,next)=>{
  res.send('Profile');
})

router.get('/',(req,res,next)=>{
  res.send('Users base page');
})

module.exports=router;
