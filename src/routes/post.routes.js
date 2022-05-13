const express = require('express');
const { getPosts, createPost, updatePost, deletePost, getPost }= require('../controllers/post.controller');

const router = express.Router();

const data = ["Hello", "World"];


// Metodo Get
router.get('/posts', getPosts);

router.get('/posts/:id', getPost);

// Metodo Post
router.post('/posts', createPost);

// Metodo Update
router.put('/posts', updatePost);

// Metodo delete
router.delete('/posts', deletePost);


module.exports = router;