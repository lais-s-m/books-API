const validateSchemaMiddleware = (schema) => async (req, res, next) => {
  try {
    const validatedBody = await schema.validate(req.body, {
      stripUnknown: false,
      abortEarly: false,
    });

    req.validatedBody = validatedBody;
    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export default validateSchemaMiddleware;
