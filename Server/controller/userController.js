const bcrypt = require('bcrypt');
const User = require('../models/userModal');


module.exports.register = async(req,res,next) => {

  try{

    const {name,email,password,username} =req.body
    const userNameChack = await User.findOne({username:username})
    console.log('user is',userNameChack)
    if(userNameChack)
      return res.status(400).send({msg:'user already registered'})
    
      // email chacked
      const userEmailCheck = await User.findOne({email:email})
      if(userEmailCheck)

      return res.sratus(400).json({msg:'email already exist'})
    
      // store password in database
    
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        username,
        email,
      
        password: hashedPassword
       
      })
    delete user.password
    return res.json({status:200,user:user})

  }catch (err) {
    next(err);
  }

}