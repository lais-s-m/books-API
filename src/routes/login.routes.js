import { Router } from "express";

import loginController from "../controllers/login.controllers";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { loginSchema } from "../schemas";

const loginRoutes = Router();

loginRoutes.post("", validateSchemaMiddleware(loginSchema), loginController);

export default loginRoutes;
