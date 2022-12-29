const { addMessage, getMessages } = require('../controller/msgControler')
const { register, login, users } = require('../controller/userController')

const router = require('express').Router()

router.post('/api/auth/signup',register)
router.post('/api/auth/login',login)
router.post('/api/auth/sendmsg',addMessage)
// get data

router.get('/api/users',users)
router.post('/api/auth/sendmsg',getMessages)
module.exports= router