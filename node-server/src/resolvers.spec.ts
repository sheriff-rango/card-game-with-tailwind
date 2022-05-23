import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const ME_QUERY = {
  id: 'Query for sample user',
  query: /* GraphQL */ `
    query {
      me {
        id
        username
      }
    }
  `,

  // expected result
  expected: { data: { me: { id: 'User:1', username: 'interview' } } },
};

describe('Resolvers > Me', () => {
  const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  // running the test for each case in the cases array
  const { id, query, expected } = ME_QUERY;

  test(`query: ${id}`, async () => {
    const result = await graphql(schema, query);
    return expect(result).toEqual(expected);
  });
});
