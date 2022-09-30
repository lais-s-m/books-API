import users from "../../database/users";

const listUserService = () => {
  let listUsers = [];
  users.forEach((user) => {
    delete user.password;
    listUsers.push(user);
  });
  return listUsers;
};

export default listUserService;
