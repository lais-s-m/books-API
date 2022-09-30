import loginService from "../services/login/login.service";

const loginController = async (req, res) => {
  try {
    const { email, password } = req.validatedBody;
    const token = await loginService(email, password);
    return res.json({ token });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

export default loginController;
