import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs  = `

    type Friend {
        id: ID,
        firstName: String,
        lastName: String
    }
    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: String,
        firstName: String,
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema};