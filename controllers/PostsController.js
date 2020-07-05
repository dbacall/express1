var Post = require('../models/post');

var PostsController = {
  create: (req, res) => {
    var post = new Post(req.body);

    post
      .save()
      .then(() =>
        res.status(200).json({ message: 'Post successfully added to database' })
      )
      .catch(() =>
        res.status(400).json({ error: 'Post could not be added to database.' })
      );
  },
};

module.exports = PostsController;
