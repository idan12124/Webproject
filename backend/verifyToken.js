const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const token = req.header('token')
    if(!token) return res.status(401).send('Access Denied!')

    try{
        const verify = jwt.verify(token, process.env.JWT_SECERT)
        req.user = verify
        next()
        }catch{
        res.status(400).send('Invalid token!')
    }
}