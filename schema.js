import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Email {
        email: String
    }

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: [Email]!
    }

    type Query {
        friend: Friend
    }
`);

export default schema;
