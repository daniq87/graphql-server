const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const server = express();


const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

server.use('/graphql',
        graphqlHTTP((req, res, gql) => ({
        schema,
        graphiql: dev,
        pretty: dev
    }))
)

server.listen(PORT, function(err){
    if(err) throw new err;

    console.log(`Server ir running in port ${PORT}`);
})