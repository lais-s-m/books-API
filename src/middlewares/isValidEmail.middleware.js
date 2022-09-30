import users from "../database/users";

const isValidEmailMiddleware = (req, res, next) => {
  const user = req.validatedBody;

  const emailIsAlreadyTaken = users.find((elem) => elem.email === user.email);
  if (emailIsAlreadyTaken) {
    return res.status(401).json({
      message: "This email is already being used. Please, try another one",
    });
  }

  next();
};

export default isValidEmailMiddleware;
