const router = require('express').Router()
const PaymentController = require('../controllers/PaymentController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/payment')
    .get(auth, authAdmin, PaymentController.getPayments)
    .post(auth, PaymentController.createPayment)


module.exports = router