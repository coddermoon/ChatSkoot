// require all dependencies

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const userRoutes = require('./routes/userRoutes');
const { register, login, users } = require('./controller/userController');
const router = require('./routes/userRoutes');
const socket = require('socket.io')

// dotenv required configuration

const port = process.env.PORT ||5000
const url = process.env.DB_URL

// create app

const app = express()
app.use(express.json())
app.use(cors())

// all route declarations

app.use(router,register)
app.use(router,login)
app.use(router,users)




// basic single page workflow




// mongodb connections
mongoose.set('strictQuery', false);
mongoose.connect(url , {
  dbName: `chat-application`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
 

  })
.then(()=>{
    console.log('database connection successful')
})
.catch(err => console.error(err.message))


// listening port

const server =  app.listen(port,()=> console.log('listening on port',port))

// intrigate socket to realtime chat

const io = socket(server,
  {
    cors: {
      origin: '*',
      credentials:true,
    }
  })

  // global object for online chat

  global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});