var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');

router.post('/', PostsController.create);

module.exports = router;
