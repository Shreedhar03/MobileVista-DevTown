const {  } = require('../Controllers/AppController')
const router = require('express').Router()

router.get('/sayHello',(req,res)=>{
    res.send("hello")
})


module.exports = router