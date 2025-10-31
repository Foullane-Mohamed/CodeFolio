import { Experience } from "./experience.model";

export class ExperienceService {
  async addExperience(data: any) {
    const experience = new Experience(data);
    return experience.save();
  }

  async updateExperience(id: string, data: any) {
    const experience = await Experience.findById(id);
    if (!experience) throw new Error("Experience not found");

    Object.assign(experience, data);
    return experience.save();
  }

  async deleteExperience(id: string) {
    const experience = await Experience.findByIdAndDelete(id);
    if (!experience) throw new Error("Experience not found");
    return experience;
  }

  async getExperiences() {
    return Experience.find();
  }
}

export const experienceService = new ExperienceService();
