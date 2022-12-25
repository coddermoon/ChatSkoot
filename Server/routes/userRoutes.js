const { register, login } = require('../controller/userController')

const router = require('express').Router()

router.post('/api/auth/signup',register)
router.post('/api/auth/login',login)

module.exports= router