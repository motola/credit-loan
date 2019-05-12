import Joi from 'joi';

class Validate {
  static postUser(req, res, next) {
    const schema = {
      id: Joi.number().required(),
      token: Joi.required(),
      firstName: Joi.string().min(3).max(15).required(),
      lastName: Joi.string().min(3).max(15).required(),
      email: Joi.string().email({ minDomainSegments: 2 }),
      password: Joi.string().regex(/^.{4,8}$/),
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);
    if (result.error !== null) {
      return res.status(400).json(result.error);
    }
    next();
  }
}
export default Validate;
