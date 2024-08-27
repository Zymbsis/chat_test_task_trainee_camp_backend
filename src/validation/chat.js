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
export const sendMessageSchema = Joi.object({
  from: Joi.string()
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
  text: Joi.string()
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
  date: Joi.string()
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

export const messageSchema = Joi.object({
  from: Joi.string().valid('me', 'contact').required().messages({
    'string.base': 'must be a string',
    'any.only': 'must be either "me" or "contact"',
    'any.required': 'is required',
  }),

  text: Joi.string().min(1).max(1000).required().messages({
    'string.base': 'must be a string',
    'string.min': 'must contain at least 1 character',
    'string.max': 'no more than {#limit} characters',
    'any.required': 'is required',
  }),

  date: Joi.string().isoDate().required().messages({
    'string.base': 'must be a string',
    'string.isoDate': 'must be in the format YYYY-MM-DDTHH:mm:ss.sssZ',
    'any.required': 'is required',
  }),
});
