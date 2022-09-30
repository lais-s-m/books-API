import {
  createBookController,
  deleteBookController,
  listBookController,
  updateBookController,
} from "../controllers/books.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isBookOwnerMiddleware from "../middlewares/isBookOwner.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { createBookSchema } from "../schemas/book.schema";

const { Router } = require("express");

const bookRoutes = Router();

bookRoutes.post(
  "",
  ensureAuthMiddleware,
  validateSchemaMiddleware(createBookSchema),
  createBookController
);
bookRoutes.get("", ensureAuthMiddleware, listBookController);
bookRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  isBookOwnerMiddleware,
  updateBookController
);
bookRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  isBookOwnerMiddleware,
  deleteBookController
);

export default bookRoutes;
