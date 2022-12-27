const { register, login, users } = require('../controller/userController')

const router = require('express').Router()

router.post('/api/auth/signup',register)
router.post('/api/auth/login',login)
// get data

router.get('/api/users',users)

module.exports= router