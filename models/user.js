const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String

    },
    email:{
        type:String,
        unique:true,
        require:true

    },
    password:{
        require:true,
        type:String

    }
},{timestamps:true})

const user=mongoose.model("user",userSchema)

module.exports=user