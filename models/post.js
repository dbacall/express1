var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
