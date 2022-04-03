const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

    router.route('/category')
        .get(CategoryController.getCategories)
        .post(auth, authAdmin, CategoryController.createCategory)
        
    router.route('/category/:id')
        .delete(auth, authAdmin, CategoryController.deleteCategory)
        .put(auth, authAdmin, CategoryController.updateCategory)

module.exports = router