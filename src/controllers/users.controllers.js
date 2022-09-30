import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";

//Create
export const createUserController = async (req, res) => {
  try {
    const user = req.validatedBody;
    const createdUser = await createUserService(user);

    return res.status(201).json(createdUser);
  } catch (err) {
    return res.status(403).json({
      message: err.message,
    });
  }
};

//Read
export const listUserController = (req, res) => {
  const users = listUserService();

  return res.json(users);
};

//Update
export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedUser = await updateUserService(id, updatedData);

    return res.json(updatedUser);
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};

//Delete
export const deleteUserController = (req, res) => {
  try {
    const { id } = req.params;
    deleteUserService(id);

    return res.json({
      message: "User deleted with success",
    });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};
