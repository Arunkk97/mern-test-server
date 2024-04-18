const users=require('../models/userModel')

// register
exports.register=async(req,res)=>{
    console.log("inside register request!!!");
    const{firstname,lastname,email,password,address,mobile,gender,dob,course}=req.body
    console.log(firstname,lastname,email,password,address,mobile,gender,dob,course);
    try{
        //check email is present in db or not
        const existingUser=await users.findOne({email})
        //if email is present then existing user
        if(existingUser){
            res.status(406).json("user already exists!!!")
        }else{
            //else store/ insert data to db
            const newUser=new users({
                firstname,lastname,email,password,address,mobile,gender,dob,course
            })
            //to store data to mongodb  from mongoose model
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(err){
        res.status(401).json(err)
    }
}


//get all 

exports.getAllUser=async(req,res)=>{
    
  
    try{
        const alluser=await users.find()
        res.status(200).json(alluser)
    }catch(err){
        res.status(401).json(err)
    }
}