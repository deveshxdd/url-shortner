const express = require('express')
const router = express.Router()
const {handlenewurl} = require('../controllers/url')
// ye jo router hai isi ke ander saare routes aajenge
// ye humne islia use kiya hai taki routes export krne pe sare export hojaae


router.post('/', handlenewurl)
module.exports = router