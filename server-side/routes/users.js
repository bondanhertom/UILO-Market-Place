const router = require('express').Router()
const ControllerUser = require('../controllers/users')
const { authentication } = require('../middlewares/authentication')



router.get('/', (req, res) => {
    res.status(200)
        .json({ massage: "TES MASUK USER" })
})
//user admin
router.post('/login', ControllerUser.login)
router.post('/register', ControllerUser.register)






module.exports = router