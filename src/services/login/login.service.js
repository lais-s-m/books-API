import { compare } from "bcryptjs";
import users from "../../database/users";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: user.id,
  });

  return token;
};
export default loginService;
