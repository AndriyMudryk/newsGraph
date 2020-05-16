var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Article {
    title: String,
    content: String,
    author: String,
    url: String
  }

  type Query {
    hello: String,
    news: [Article]
  }
`);

module.exports = schema;