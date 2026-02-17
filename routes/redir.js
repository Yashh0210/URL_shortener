const express=require('express')
const redir=require('../controller/redirController')
const redirRouter=express.Router()
redirRouter.get('/:shortId',redir)
module.exports = redirRouter
