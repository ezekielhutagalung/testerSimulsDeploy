const router = require("express").Router()

const UserController = require('../controller/UserController')

const PhotoController = require('../controller/PhotoController')

const authentication = require('../midlewares/authentication')


router.post('/register', UserController.UserRegisterHandler)

router.post('/login', UserController.UserLoginHandler)

router.get('/photos',authentication, PhotoController.findAll)

module.exports= router