"use strict";
require("dotenv").config();
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const gqlMiddleware = require("express-graphql");
const cors = require("cors");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers");
const app = express();
const port = process.env.port || 3000;
const isDev = process.env.NODE_ENV !== "production";
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);
//definiendo el esquema
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());

app.use(
  "/",
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
