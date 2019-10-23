'use strict';

const express = require('express');

const router = express.Router();

app.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  res.send(`you have requested post number ${postId}`);
});

module.exports = router;