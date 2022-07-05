const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'}) // zawezenie wynikow do danego parametru
      .select('author created title photo') // wybranie pol, ktore chcemy pobierac
      .sort({created: -1}); // sortowanie w kolejnosci malejacej
    if (!result) {
      res.status(404).json({ post: 'Not found' });
    } else {
      res.json(result);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if (!result) {
      res.status(404).json({ post: 'Not found' });
    } else {
      res.json(result);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
