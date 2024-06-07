const mongoose=require('mongoose')

const wishList=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            require:true
        },
        count:{
            type:Number,
            required:true
        }
    },
    userId:{
        type:String,
        required:true
    }
})

const wishlists=mongoose.model('wishlists',wishList)
module.exports=wishlists