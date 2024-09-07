const express = require('express')
const router = express.Router()

const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = Alien.find()
    }catch(err){
        res.send('Error' + err)
    }
   
})

module.exports = router