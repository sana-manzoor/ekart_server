const wishlists=require('../Models/wishListModel')
exports.addToWishList=async(req,res)=>{
    const {id,title,price,description,category,image,rating}=req.body
    const userId=req.payload
    try{
        const excistingProduct=await wishlists.findOne({userId,id})
        if(excistingProduct){
            res.status(406).json("Product already excists in wishlist")
        }
        else{
            const newItem=new wishlists({id,title,price,description,category,image,rating,userId})
            newItem.save()
            res.status(201).json(newItem)
        }
    }
    catch(err){
        res.status(404).json(err)
    }

    
}

exports.getWishList=async(req,res)=>{
    try{
        const userId=req.payload
        const wishListProducts= await wishlists.find({userId})
        res.status(200).json(wishListProducts)
    }
    catch(err){
        res.status(401).json(err)
    }
   

}

exports.removeFromWishList=async (req,res)=>{
    try{
        const wishId=req.params.id
    const wishListDelete=await wishlists.findOneAndDelete({_id:wishId})
    res.status(200).json(wishListDelete)
    }
    catch(err){
        res.status(401).json(err)
    }
    

}
