import { celebrate, Joi } from 'celebrate';

export const createRecordValidator = celebrate({
  body: Joi.object().keys({
    gate_id: Joi.number().required()
  })
});