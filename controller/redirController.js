const URL = require('../models/url.js')

const redir = async (req,res)=>{
    
    try{
        const entry= await URL.findOneAndUpdate(
            {shortId:req.params.shortId},
            {
                 $push:{
                   clickHistory: {timeStamps: Date.now()}
                 }     
            }
        )
         if (!entry) {
      return res.status(404).json({
        msg: "Short URL not found"
      })
    }
        res.redirect(entry.redirectUrl)
        
    }
    catch(err){
        res.json({msg:"error redirecting ",err});

    }
}
module.exports = redir
