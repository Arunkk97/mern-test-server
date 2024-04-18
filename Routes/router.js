const express=require('express')
const userController = require('../controllers/userController')

const router=new express.Router()

//register
router.post('/register',userController.register)

//get all 
router.get('/allUser',userController.getAllUser)

//export
module.exports=router