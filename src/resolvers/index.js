import { storage } from '@forge/api';

// Define the resolver function to store project data
export const resolvers = {
  Mutation: {
    async storeProjectData(_, { input }) {
      const { project, timeline } = input;

      // Validate inputs (optional)
      if (!project || !timeline) {
        throw new Error('Project and timeline are required!');
      }

      // Save data in Forge storage
      await storage.set('projectData', { project, timeline });

      return {
        success: true,
        message: 'Project data stored successfully!',
      };
    },
  },
};
