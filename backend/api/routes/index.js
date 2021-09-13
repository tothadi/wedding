const express = require('express')
const router = express.Router()
const ctrlGuest = require('../controllers/guesthandling')

router.post('/guests', ctrlGuest.saveGuest)

module.exports = router;
