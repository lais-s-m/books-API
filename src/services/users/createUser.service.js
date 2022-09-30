import { hash } from "bcryptjs";
import users from "../../database/users";

const createUserService = async (user) => {
  user.password = await hash(user.password, 10);
  users.push(user);
  return user;
};

export default createUserService;
