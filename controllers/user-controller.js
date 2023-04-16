const User = require('../model/user-model');
const bcrypt = require('bcryptjs');


//Signup functionalty
const signup = async(req,res,next) =>{
    // console.log("req",req);
    const {name,email,password} = req.body;
    let existingUser;
     try{
        existingUser = User.findOne({email: email})
     }
     catch(e){
        console.log("Not Existing User",e);
     }


     if(existingUser){
        return res.status(400).json({message:'User already Exist'})
     }
const passwordEncrypt = bcrypt.hasSync(password);
console.log("pswd",passwordEncrypt);
    const user = new User({
        name,
        email,
        password: passwordEncrypt,
    });

    try{
         await user.save(); }
    catch(e) { console.log("Error",e)}
    return res.status(201).json({message: user});
}


//login Functionality
const login = async(req,res,next) =>{
 const {email,password} = req.body;

 let existingUser;
 try{
    existingUser = await User.findOne({email:email});
 }
 catch(e){
    console.log(new Error(e));
 }
 if(!existingUser)
 {
    return res.status(400).json({message:'No User found, Signup Instead'});
 }
 const passwordExist = bcrypt.compareSync(password,existingUser.password);
 if(!passwordExist)
 {
    return res.status(400).json({message:'Invalid Mail/Password, pls check'});
 }

 return res.status(200).json({message:'Successful Login !!'});
  
}

exports.signup = signup;
exports.login = login;