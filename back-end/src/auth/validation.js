const Joi = require('@hapi/joi');

// Register Validate
const registerValidation = function (data) {
    const schema = Joi.object({
        name: Joi.string()
            .min(4)
            .required(),
        email: Joi.string()
            .email()
            .min(6)
            .required(),
        password: Joi.string().label('password')
            .min(6)
            .required(),
        confirmpassword:Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match'} }),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required()
    })
    return schema.validate(data)
}
module.exports.registerValidation = registerValidation
// Login Validate
const loginValidation = function (data) {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    })
    return schema.validate(data)
}
module.exports.loginValidation = loginValidation