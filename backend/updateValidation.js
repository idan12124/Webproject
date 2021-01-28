const Joi = require ('@hapi/joi')


function validatePassword(user){
    const schema = Joi.object({
        password: Joi.string().min(6).max(30).required()
    });
    return schema.validate(user)
}

function validateEmail(user){
    const schema = Joi.object({
        email: Joi.string().email().required()
    });
    return schema.validate(user)
}

function validatePostalCode(user){
    const schema = Joi.object({
        postalCode: Joi.number().min(1000).required()
    });
    return schema.validate(user)
}

module.exports = {
    validatePassword: validatePassword,
    validateEmail: validateEmail,
    validatePostalCode: validatePostalCode
};