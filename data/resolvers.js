import mongoose from 'mongoose';
import { Friends } from './dbConnectors';
import { rejects } from 'assert';

class Friend {
    constructor(id, { firstName, lastName, gender, language, email, age, contacts }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
        this.age = age;
        this.contacts = contacts;
    }
}

// resolver map
export const resolvers = {
    Query: {
        getFriend: ({id}) => {
            return new Friend(id, friendDatabase[id]);
        }
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                age: input.age,
                gender: input.gender,
                contacts: input.contacts,
                email: input.email,
                language: input.language
            });

            newFriend.id = newFriend._id; // assigned by db

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                });
            });
        }
    }
};
