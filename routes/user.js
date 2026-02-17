const express=require('express')
const router=express.Router()
const  { handleSignup, handleLogin }=require('../controller/user.js')


router.post('/',handleSignup);
router.post('/login',handleLogin);

module.exports=router
