const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();


// allow cors request
app.use(cors());

mongoose.connect(config.mongoURL, function() { /* dummy function */ })
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
