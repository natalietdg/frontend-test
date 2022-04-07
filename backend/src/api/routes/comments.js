const express = require('express');
const router = express.Router();
const comments = require("../controllers/comments");

router.get("/comments", comments.getComments);

module.exports = router;
