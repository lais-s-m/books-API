import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization token",
    });
  }
  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Permission denied",
      });
    }
    req.user = {
      id: decoded.sub,
    };

    next();
  });
};

export default ensureAuthMiddleware;
