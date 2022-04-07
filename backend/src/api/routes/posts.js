var express = require('express');
var router = express.Router();
const posts = require('../controllers/posts');

router.get('/posts', posts.getPosts);
router.get('/posts/:post_id', posts.getSinglePost);

module.exports = router;

  
