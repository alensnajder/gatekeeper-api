import { celebrate, Joi } from 'celebrate';

export const createGateValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    gpio_pin: Joi.number().required(),
    duration: Joi.number().required()
  })
});

export const updateGateValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    gpio_pin: Joi.number().required(),
    duration: Joi.number().required()
  })
});