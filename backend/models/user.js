const mongoose = require('mongoose')
const argon2 = require("argon2")

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        trim: true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email :{
        type : String,
        trim : true,
        unique: true,
        required : true
    }
})

userSchema.pre("save", async function(){
    //console.log(this)
    try{
    const user = {...this}
    const hashedPassword = await argon2.hash(this.password)
    this.password =hashedPassword 
    }catch(e){
        console.log(e)
    }
})

module.exports = mongoose.model("User",userSchema)

