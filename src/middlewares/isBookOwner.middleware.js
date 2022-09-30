const isBookOwnerMiddleware = (req, res, next) => {
  const userId = req.user.id;
  const { owner_id } = req.body;

  if (owner_id !== userId) {
    return res.status(403).json({
      message: "Permission Denied. Books can be edited only for their owners.",
    });
  }
  next();
};

export default isBookOwnerMiddleware;
