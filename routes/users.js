const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Show = require('../models/Show')


router.get('/', async(req,res) => {
    const user = await User.findAll()
    res.json(user)
})


module.exports = router