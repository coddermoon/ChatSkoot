const { register } = require('../controller/userController')

const router = require('express').Router()

router.post('/api/auth/signup',register)

module.exports= router