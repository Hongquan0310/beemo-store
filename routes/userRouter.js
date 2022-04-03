
const router= require('express').Router()
const UserController= require('../controllers/UserController')
const auth = require('../middleware/auth')

router.post('/register',UserController.register)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.get('/infor', auth,  UserController.getUser)
router.get('/refresh_token', UserController.refreshToken)
router.patch('/addcart', auth, UserController.addCart)
router.get('/history', auth, UserController.history)

module.exports=router