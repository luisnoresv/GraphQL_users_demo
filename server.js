const express = require('express');
// To add GraphQL
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


const app = express();

// wired up a middleware to a express on an application, we first need to register graphQL to our express app
app.use('/graphql', expressGraphQL({
    // Regular way
    // schema : schema,
    //ES6
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening');
});

