const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://amr:123@cluster0-shard-00-00-gcrtg.mongodb.net:27017,cluster0-shard-00-01-gcrtg.mongodb.net:27017,cluster0-shard-00-02-gcrtg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", function() { /* dummy function */ })
.then(() => {
    console.log('Server should start here');
})
.catch(err => { // mongoose connection error will be handled here
    console.error('App starting error:', err.stack);
    process.exit(1);
});

mongoose.connection.once('open', () =>{
    console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
