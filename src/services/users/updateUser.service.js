import { hash } from "bcryptjs";
import users from "../../database/users";

const updateUserService = async (id, updatedData) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }
  const user = users[userIndex];

  if (updatedData.password) {
    updatedData.password = await hash(updatedData.password, 10);
  }
  if (updatedData.id) {
    updatedData.id = user.id;
  }

  const updatedUser = { ...user, ...updatedData };
  const treatedUser = {
    name: updatedUser.name,
    email: updatedUser.email,
    password: updatedUser.password,
    id: updatedUser.id,
  };
  return treatedUser;
};

export default updateUserService;
