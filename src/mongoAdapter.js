const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:mongoPassword@cluster0-dz0gn.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Article = new Schema({
  _id: ObjectId,
  title: String,
  content: String,
  author: String,
  url: String
});

const News = mongoose.model("News", Article);

module.exports = {
  mongoose,
  News
}
