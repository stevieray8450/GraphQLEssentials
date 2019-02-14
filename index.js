import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = {
    friend: () => {
        return {
            "id": 12345,
            "firstName": "Steve",
            "lastName": "Boniface",
            "email": "stevieray8450@gmail.com",
            "language": "English",
            "gender": "Male"
        }
    }
}; // resolver

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('running server on port 8080/graphql'));