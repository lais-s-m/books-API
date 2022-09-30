import express from "express";

import userRoutes from "./routes/users.routes";
import bookRoutes from "./routes/books.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/login", loginRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

export default app;
