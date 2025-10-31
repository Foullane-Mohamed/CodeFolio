import { projectService } from "./project.service";

export const projectResolvers = {
  Query: {
    getProjects: async () => projectService.getProjects(),
  },
  Mutation: {
    addProject: async (_: any, { input }: any) =>
      projectService.addProject(input),
    updateProject: async (_: any, { id, input }: any) =>
      projectService.updateProject(id, input),
    deleteProject: async (_: any, { id }: any) =>
      projectService.deleteProject(id),
  },
};
