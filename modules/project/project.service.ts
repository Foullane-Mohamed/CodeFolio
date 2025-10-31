import { Project } from "./project.model";

export class ProjectService {
  async addProject(data: any) {
    const project = new Project(data);
    return project.save();
  }

  async updateProject(id: string, data: any) {
    const project = await Project.findById(id);
    if (!project) throw new Error("Project not found");

    Object.assign(project, data);
    return project.save();
  }

  async deleteProject(id: string) {
    const project = await Project.findByIdAndDelete(id);
    if (!project) throw new Error("Project not found");
    return project;
  }

  async getProjects() {
    return Project.find();
  }
}

export const projectService = new ProjectService();
