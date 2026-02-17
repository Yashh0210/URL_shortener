const express = require("express");
const router = express.Router();
const URL=require('../models/url.js')

const analyticsController= async (req,res)=>{
   const shortId=req.params.shortId;
   const result= await URL.findOne({shortId})
   if(!result){
   return res.status(404).json({error:'no short Id found'});
   }
   return res.json({
    totalClicks:result.clickHistory.length,
    analytics:result.clickHistory

   })
    

}
module.exports=analyticsController