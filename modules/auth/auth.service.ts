import jwt from "jsonwebtoken";
import { User } from "../user/user.model";

const SECRET_KEY = process.env.JWT_SECRET || "yourSecretKey";

export class AuthService {
  async login(username: string, password: string) {
    const user = await User.findOne({ username });
    if (!user) throw new Error("Invalid username or password");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid username or password");

    const token = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    return { token, user };
  }
}

export const authService = new AuthService();
