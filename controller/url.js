const URL = require('../models/url.js')
const { nanoid } = require('nanoid')




const urlController = async (req,res)=>{
    try{
        const shortId = nanoid(8)
        const createShortUrl = await URL.create({
           
            shortId:shortId,
             redirectUrl:req.body.originalUrl,
              clickHistory:[]

        })
        console.log('POST /url hit')
        res.status(201).json({
           msg:"success"
        })

    }
    catch(err){
        console.error('Error creating short URL:', err.message)
        res.status(500).json({
            msg:"error creating short URL",
            error: err.message
        })

    }

}

module.exports = urlController