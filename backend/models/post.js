const mongoose = require('mongoose')

const postSchema=new mongoose.Schema({
    titre: {
        type:String,
        required:true,
    },
    body :{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    author :{
        type:Array,
        required:true
    },
    voteCount:{
        type :Number
    },
    noteMoyenne:{
        type :Number
    },
    created_at :{
        type:Date,
        required:true
    },
    comments:{
        type:Array
    }
})

const Post=mongoose.model("Post",postSchema)

module.exports=Post