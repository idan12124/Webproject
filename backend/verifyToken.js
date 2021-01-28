const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied!')

    try{
        const verify = jwt.verify(token, process.env.JWT_SECERT)
        req.user = verify
    }catch{
        res.status(400).send('Invalid token!')
    }
}