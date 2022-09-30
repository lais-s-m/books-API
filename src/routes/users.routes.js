import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isTheSameUserMiddleware from "../middlewares/isTheSameUser.middleware";
import isValidEmailMiddleware from "../middlewares/isValidEmail.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { createUserSchema } from "../schemas/user.schema";

const { Router } = require("express");

const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemaMiddleware(createUserSchema),
  isValidEmailMiddleware,
  createUserController
);
userRoutes.get("", listUserController);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  isTheSameUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  isTheSameUserMiddleware,
  deleteUserController
);

export default userRoutes;
