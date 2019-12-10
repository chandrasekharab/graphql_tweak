import mongoose from 'mongoose';
import {Friends} from './dbConnection';

class Friend {
    constructor(id, {firstName, lastName}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const friendDatabase = {};
export const resolvers = {
    Query: {
        getFriend: ({id}) => new Friend(id, friendDatabase[id])
    },
    Mutation: {
        createFriend: ({input}) => {
           const newFrd = new Friends({
               firstName: input.firstName,
               lastName: input.lastName
           });

        }
    }
}