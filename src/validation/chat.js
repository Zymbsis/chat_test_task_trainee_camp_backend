import Joi from 'joi';

export const createChatSchema = Joi.object({
  firstName: Joi.string()
    .pattern(/^[A-Za-z-]+$/)
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.base': 'should be a string',
      'string.pattern.base': 'must contain only Latin letters and dashes',
      'string.min': 'must contain at least {#limit} characters',
      'string.max': 'must contain no more than {#limit} characters',
      'any.required': 'is required',
    }),
  lastName: Joi.string()
    .pattern(/^[A-Za-z-]+$/)
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.base': 'should be a string',
      'string.pattern.base': 'must contain only Latin letters and dashes',
      'string.min': 'must contain at least {#limit} characters',
      'string.max': 'must contain no more than {#limit} characters',
      'any.required': 'is required',
    }),
});
export const updateChatSchema = Joi.object({
  firstName: Joi.string()
    .pattern(/^[A-Za-z-]+$/)
    .min(3)
    .max(30)
    .messages({
      'string.base': 'should be a string',
      'string.pattern.base': 'must contain only Latin letters and dashes',
      'string.min': 'must contain at least {#limit} characters',
      'string.max': 'must contain no more than {#limit} characters',
      'any.required': 'is required',
    }),
  lastName: Joi.string()
    .pattern(/^[A-Za-z-]+$/)
    .min(3)
    .max(30)
    .messages({
      'string.base': 'should be a string',
      'string.pattern.base': 'must contain only Latin letters and dashes',
      'string.min': 'must contain at least {#limit} characters',
      'string.max': 'must contain no more than {#limit} characters',
      'any.required': 'is required',
    }),
});
