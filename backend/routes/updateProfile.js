const router = require('express').Router();
const verifyToken = require('../verifyToken');
const bcrypt = require('bcrypt');
const User = require('../model/User');
const {validatePassword, validateEmail, validatePostalCode} = require('../updateValidation')


router.post('/', verifyToken , async (req,res) => {
 
    //Validate user data.
    var {error} = req.body.password.length > 0 && validatePassword({password: req.body.password})
    if(error) { return res.status(400).json({"error": error.details[0].message})};
    
    var {error} = req.body.postalCode.length > 0 && validatePostalCode({postalCode: req.body.postalCode})
    if(error) { return res.status(400).json({"error": error.details[0].message})};

    var {error} = req.body.email.length > 0 && validateEmail({email: req.body.email})
    if(error) { return res.status(400).json({"error": error.details[0].message})};
    
    //getUser
    const user = await User.findById(req.user._id)

    //add hash password
    if(req.body.password.length > 0){
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        user.password = hashPassword
    }

    //Update if need to
    if(req.body.firstName.length > 0) user.firstname = req.body.firstName
    if(req.body.lastName.length > 0) user.lastname = req.body.lastName
    if(req.body.email.length > 0) user.email = req.body.email
    if(req.body.city.length > 0) user.city = req.body.city
    if(req.body.country.length > 0) user.country = req.body.country
    if(req.body.postalCode.length > 0) user.postalcode = req.body.postalCode
    if(req.body.aboutMe.length > 0) user.about = req.body.aboutMe


    //Save uesr.
    try{
        const saveUser = await user.save()
        res.status(200).json({"succcess":"Update success!"})
    }catch (err){
        console.log('why?', err)
        res.status(400).send(err)
    }
})

module.exports = router;
