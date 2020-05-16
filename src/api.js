const Article = require("./article");
const db = require("./mongoAdapter");

const root = {
  hello: () => {
    return 'Hello world!';
  },

  news: () => {
    return db.News.find({});
  }
};

module.exports = root;