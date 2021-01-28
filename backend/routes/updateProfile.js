const router = require('express').Router();
const verifyToken = require('../verifyToken')

router.post('/', verifyToken ,(req,res) => {
    res.send('auth')
})

module.exports = router;
