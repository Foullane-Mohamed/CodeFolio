import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthUser } from "./auth.model";

export class AuthService {
  async register(username: string, password: string) {
    const existingUser = await AuthUser.findOne({ username });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new AuthUser({ username, password: hashedPassword });
    await newUser.save();

    return newUser;
  }

  async login(username: string, password: string) {
    const user = await AuthUser.findOne({ username });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return { token };
  }
}

export const authService = new AuthService();
