const router = require('express').Router();
const User = require('../model/User')
const validate = require('../registerValidation')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    const userV = {
        username: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        postlCode: req.body.postalCode
    }
    const user = new User(
        {
            username: req.body.userName,
            password: req.body.password,
            company: req.body.company,
            email: req.body.email,
            firsname: req.body.firstName,
            lastname: req.body.lastName,
            city: req.body.city,
            country: req.body.country,
            postalcode: req.body.postalCode,
            about: req.body.aboutMe
        }
    )
    //Validate user data.
    const {error} = validate(userV)
    if(error) { return res.status(400).send(error.details[0].message)};
    
    //Check uniq
    console.log(user.username)
    const userexist = await User.findOne({username: user.username})
    if(userexist) {return res.status(400).send("The user alredy exsits")}

    //add hash password
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    
    user.password = hashPassword
    console.log(hashPassword)
    //Create new uesr.
    try{
        const saveUser = await user.save()
        res.send(saveUser)
    }catch (err){
        console.log('why?', err)
        res.status(400).send(err)
    }

});

module.exports = router;

