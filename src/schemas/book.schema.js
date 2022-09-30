import { v4 } from "uuid";
import * as yup from "yup";

export const createBookSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(2, "Title must have ate least 2 characters"),
  author: yup
    .string()
    .required("Author is required")
    .min(2, "Author must have at least 2 characters"),
  year: yup.string().required("Year is required"),
  owner_id: yup.string().notRequired(),
  id: yup
    .string()
    .default(() => v4())
    .transform(() => v4())
    .notRequired(),
});
