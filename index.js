import express from "express";
import graphqlHTTP from "express-graphql";
// if using `export default`, this will be import schema from "./schema"; instead
import { schema } from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(8080, () => console.log("running server on port 8080/graphql"));
