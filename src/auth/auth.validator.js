import { celebrate, Joi } from 'celebrate';

export const getAccessTokenValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
});