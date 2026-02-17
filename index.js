const express=require('express')
const path=require('path')
const connectMongoose=require('./connection.js')
const urlModel=require('./models/url.js')
const urlRouter=require('./routes/url.js')
const redirectRouter=require('./routes/redir.js')
const staticRouter=require('./routes/staticRouter.js')
const userRoute=require('./routes/user.js')
const restrictUser=require('./middleware/auth.js')
const cookieParser = require("cookie-parser");



const app=express()

const port=8001

app.use(express.json())
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }))




app.set("view engine", "ejs");


app.set("views", path.join(__dirname, "views"));






// Debug middleware to log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use('/',staticRouter)
app.use('/url',restrictUser, urlRouter)
app.use('/redir',  redirectRouter) 
app.use('/user',userRoute)
// make a /url/analytics/:shortId route to display all the analytics using .visitHistory


connectMongoose();










app.listen(port,()=>{
    console.log(`your server start at port-> ${port}`)
})
