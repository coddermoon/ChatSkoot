// require all dependencies

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

// dotenv required configuration

const port = process.env.PORT ||5000
const url = process.env.DB_URL

// create app

const app = express()
app.use(express.json())

// mongodb connections
mongoose.set('strictQuery', false);
mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
  })
.then(()=>{
    console.log('database connection successful')
})
.catch(err => console.error(err.message))


// listening port

const server =  app.listen(port,()=> console.log('listening on port',port))