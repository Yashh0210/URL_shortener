const express = require('express')
const router = express.Router()
const urlController=require('../controller/url.js')
const analyticsController=require('../controller/analyticsController.js')

 router.post('/',urlController)
 router.get('/analytics/:shortId',analyticsController)

module.exports = router