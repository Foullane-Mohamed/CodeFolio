import { User } from "./user.model";

export class UserService {
  async getProfil() {
    const user = await User.findOne();
    if (!user) throw new Error("Profile not found");
    return user;
  }

  async addProfile(data: any) {
    const existing = await User.findOne();
    if (existing) throw new Error("Profile already exists");

    const user = new User(data);
    return user.save();
  }

  async updateProfile(data: any) {
    const user = await User.findOne();
    if (!user) throw new Error("Profile not found");

    Object.assign(user, data);
    return user.save();
  }
}

export const userService = new UserService();
