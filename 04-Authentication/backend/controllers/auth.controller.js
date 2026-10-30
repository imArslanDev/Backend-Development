import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../config/token.js";
import uploadImageOnCloudinary from "../config/cloudinary.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    if (!firstName || !lastName || !userName || !email || !password) {
      if (req.file?.path) fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "Fill All Details" });
    }

    let profileImageURL = "";
    if (req.file) {
      profileImageURL = await uploadImageOnCloudinary(req.file.path);
    }

    // Check if user already exist
    let userExist = await User.findOne({ email });
    if (userExist) {
      if (req.file?.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "User Already exist" });
    }

    // Hash Pasword
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      profileImage: profileImageURL, // Schema mein field honi chahiye
    });

    let token;
    try {
      token = generateToken(user._id);
    } catch (error) {
      console.log("Token Err: ", error);
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIROMENT == "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days in Milli Seconds
    });

    return res
      .status(201)
      .json({ users: { firstName, lastName, userName, email } });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({ message: "User does not exist" });
    }



    let matchPassword = await bcrypt.compare(password, existUser.password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    let token;
    try {
      token = generateToken(existUser._id);
    } catch (error) {
      console.log("Token Err: ", error);
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIROMENT == "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days in Milli Seconds
    });

    return res.status(200).json({
      users: {
        firstName: existUser.firstName,
        lastName: existUser.lastName,
        userName: existUser.userName,
        email: existUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
