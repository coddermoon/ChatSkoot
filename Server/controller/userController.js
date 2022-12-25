const bcrypt = require('bcrypt');
const User = require('../models/userModal');


module.exports.register = async(req,res,next) => {

  try{

    const {name,email,password,username} =req.body
    const userNameChack = await User.findOne({username})
    if(userNameChack)
      return res.json({msg:'user already registered'})
    
      // email chacked
      const userEmailCheck = await User.findOne({username})
      if(userEmailCheck)
      
      return res.json({msg:'email already exist'})
    
      // store password in database
    
      // const encryptPass = bcrypt.hash(password,10)
      const user = await User.create({
        name,
        email,
        username,
       
      })
    delete user.password
    return res.json({status:200,user:user})

  }
  // catch 
  catch(err){
    return next(err)
  }

}