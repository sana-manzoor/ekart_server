const carts=require('../Models/cartModel')

exports.addToCart=async(req,res)=>{
    try{
        const {id,title,price,image,quantity}=req.body
        const userId=req.payload
        const excistingProduct=await carts.findOne({id,userId})
        if(excistingProduct){
            excistingProduct.quantity++
            excistingProduct.price=excistingProduct.quantity*excistingProduct.price
            excistingProduct.save()
            res.status(200).json(excistingProduct)

        }
        else{
            const newCart=new carts({
                id,title,price,image,quantity,totalPrice:price,userId
            })
            newCart.save()
            res.status(200).json("Item added to cart!!")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.viewCarts=async (req,res)=>{
    try{
        const userId=req.payload
        const data=await carts.find({userId})
        res.status(200).json(data)

    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteCartItem=async(req,res)=>{
    try{
        const cartId=req.params.id
        const result=await carts.findOneAndDelete({_id:cartId})
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.incCartQuantity=async(req,res)=>{
    try{
        const cartId=req.params.id
        const excistingProduct=await carts.findOne({_id: cartId})
        excistingProduct.quantity++
        excistingProduct.totalPrice=excistingProduct.price * excistingProduct.quantity
        await excistingProduct.save()
        res.status(200).json("Quantity Increased")
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.decQuantity=async(req,res)=>{
    try{
        const cartId=req.params.id
        const excistingProduct=await carts.findOne({_id: cartId})
        excistingProduct.quantity--
        if(excistingProduct.quantity==0){
            const result=await carts.findOneAndDelete({_id:cartId})
            res.status(200).json("Item Deleted by Quantity 0")
        }
        else{
            excistingProduct.totalPrice=excistingProduct.price * excistingProduct.quantity
            await excistingProduct.save()
            res.status(200).json("Quantity Decreased")
        }

    }
    catch(err){
        res.status(401).json(err)
    }

}

exports.emptyCart=async(req,res)=>{
    try{
        const userId=req.payload
    const result=await carts.deleteMany({userId})
    res.status(200).json("Cart is empty")

    }
    catch(err){
        res.status(401).json(err)
    }
    
}
