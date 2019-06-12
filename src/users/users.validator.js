import { celebrate, Joi } from 'celebrate';

export const createUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confirm_password: Joi.string().valid(Joi.ref('password')).required()
  })
});

export const updateUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().lowercase().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required()
  })
});