const isTheSameUserMiddleware = (req, res, next) => {
  const id_userToBeEdited = req.params.id;
  const id_userLoggedIn = req.user.id;

  if (id_userToBeEdited !== id_userLoggedIn) {
    return res.status(403).json({
      message: "Permission denied. You can't edit other user profiles.",
    });
  }

  next();
};

export default isTheSameUserMiddleware;
