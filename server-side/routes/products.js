const router = require('express').Router()
const ControllerProducts = require('../controllers/products')
const { authentication } = require('../middlewares/authentication')


router.get('/products', authentication, ControllerProducts.getAllProduct)
router.post('/products', authentication, ControllerProducts.createProduct) 
router.get('/products/:id',authentication, ControllerProducts.getDetailProduct)

router.put('/products/:id',authentication, ControllerProducts.editProduct)
router.delete('/products/:id',authentication, ControllerProducts.deleteProduct)








module.exports = router