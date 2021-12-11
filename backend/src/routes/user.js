const express = require('express');
const router = express.Router();
const { userController } = require('../controller')

router.get('/logout',userController.logout)

module.exports = router;