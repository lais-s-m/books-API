import { v4 } from "uuid";
import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must have at least 3 characters")
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  id: yup
    .string()
    .default(() => v4())
    .transform(() => v4())
    .notRequired(),
});
