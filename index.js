'use strict'
const awsServerlessExpress = require('aws-serverless-express')
var express = require('express');
var expressGraphQL = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => {
    console.log(event);
    return (awsServerlessExpress.proxy(server, event, context));
};
