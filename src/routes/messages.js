const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messages')
const authController = require('../controllers/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', authController.isAuthenticated, messageController.create)



module.exports = router
