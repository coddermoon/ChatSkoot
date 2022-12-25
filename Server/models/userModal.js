const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        
        min:4,
        max:18,
        unique: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
       
       
    },
  
    profileImg:{
        type: 'string',
      
       
    }
});

module.exports = mongoose.model('Users',userSchema)