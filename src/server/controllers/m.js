import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import errorHandler from "../utils/error.js";

// Signup function
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Check if password is provided
  if (!password) {
    return res.status(400).json({ success: false, message: "Password is required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }
    next(error);
  }
};

// Signin function
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(400, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, user: { id: validUser._id, username: validUser.username, email: validUser.email } });
  } catch (error) {
    next(error);
  }
};