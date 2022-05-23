import { sampleUser } from './data';

export const resolvers = {
  Query: {
    me: () => sampleUser,
  },
  Mutation: {
    deal: () => {
      return { success: false };
    },
  },
};
