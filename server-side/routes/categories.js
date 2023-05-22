const router = require('express').Router()
const ControllerCategories = require('../controllers/categories')
const { authentication } = require('../middlewares/authentication')


router.get('/categories', authentication, ControllerCategories.getAllCategory)
router.post('/categories', authentication, ControllerCategories.createCategory)
router.put('/categories/:id', authentication, ControllerCategories.updateCategory)
router.get('/categories/:id', authentication, ControllerCategories.detailCategory)
router.delete('/categories/:id', authentication, ControllerCategories.deleteCategory)







module.exports = router