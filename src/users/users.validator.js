import { celebrate, Joi } from 'celebrate';

export const createUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
  })
});

export const updateUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
  })
});