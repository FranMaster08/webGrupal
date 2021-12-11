const express = require('express')
const router = express.Router()
const usersMiddleware = require('../middlewares/usersValidationsMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const ifUser = require('../middlewares/ifUserLoggedMiddleware')
const controller = require('../controller')

/* Login Form */
router.get("/ingreso", ifUser, controller.usersController.login)
router.post("/ingreso", controller.usersController.processLogin)

/* Register Form */
router.get("/registro", ifUser, controller.usersController.register)
router.post("/registro", uploadUserAvatar.single("image"), usersMiddleware, controller.usersController.processRegister)

/* User Profile */
router.get("/mi-cuenta", authMiddleware, controller.usersController.profile)
router.get("/logout", controller.usersController.logout)


module.exports = router