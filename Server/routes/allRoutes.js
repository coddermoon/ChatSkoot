const { addMessage, getMessages } = require('../controller/messageControler')
const { test } = require('../controller/testcontroler')
const { register, login, users } = require('../controller/userController')


const router = require('express').Router()

router.post('/api/auth/signup',register)
router.post('/api/auth/login',login)

// get data

router.get('/api/users',users)
router.get('/test',test)

// routes for message send and received

router.post("/addmsg", addMessage);
router.post("/getmsg", getMessages);

module.exports= router