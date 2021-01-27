const Joi = require ('@hapi/joi')


function validate(user){
    const schema = Joi.object({
        username: Joi.string().min(5).max(30).required(),
        password: Joi.string().min(6).max(30).required(),
        email: Joi.string().email().required(),
        postlCode: Joi.number().min(1000).required()
    });
    return schema.validate(user)
}

module.exports = validate;