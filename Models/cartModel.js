const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({

    id:{
        type:Number,
        require:true,
    },
    title:{
        type:String,
        required:true,    
    },
    price:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
        // required:true,    
    },
    image:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        require:true,
    },
    totalPrice:{
        type:Number,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    }


})

const carts=mongoose.model('carts',cartSchema)
module.exports=carts