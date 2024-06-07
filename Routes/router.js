const express=require('express')
const ProductController=require('../Controller/productController')
const userController=require('../Controller/userController')
const wishController=require('../Controller/wishListController')
const cartController=require('../Controller/cartController')
const router=new express.Router()
const jwtMiddleware=require('../middlewares/jwtmiddleware')

//get all products
//localhost:3000/all-products
router.get('/all-products',ProductController.getAllProductController)
router.get('/get-product/:id',ProductController.getProductController)
router.post('/add-user',userController.userRegisterController)
router.post('/login',userController.userLoginController)
router.post('/addwish',jwtMiddleware,wishController.addToWishList)
router.get('/getwish',jwtMiddleware,wishController.getWishList)
router.delete('/delwish/:id',jwtMiddleware,wishController.removeFromWishList)
router.post('/add-to-cart',jwtMiddleware,cartController.addToCart)
router.get('/cart-list',jwtMiddleware,cartController.viewCarts)
router.delete('/deletecartlist/:id',jwtMiddleware,cartController.deleteCartItem)
router.get('/cart-increase/:id',jwtMiddleware,cartController.incCartQuantity)
router.get('/cart-decrease/:id',jwtMiddleware,cartController.decQuantity)
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports=router