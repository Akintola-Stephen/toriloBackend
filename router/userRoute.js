const express = require('express')
const user = require('../controller/userController')
const loginMiddlewareCheck = require('../middleware/loginMiddleware')
const router = express.Router()


router.get('/getUser', user.getUser)
router.get('/deleteUser', user.deleteUser)
router.get('/addUser', user.addUser)
router.get('/dashboard', loginMiddlewareCheck.loginMiddleware, user.dashboard)


module.exports = router;