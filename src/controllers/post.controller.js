const Post = require('../models/Post');

const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.send(posts);
}

const createPost = (req, res) => {
    const {title, description} = req.body
    
}

const updatePost = (req, res) => {
    res.send('Updating a post')
}

const deletePost = (req, res) => {
    res.send('Deletiing a post')
}

const getPost = (req, res) => {
    res.send('Getting a post')
}

module.exports = { getPosts, createPost, updatePost, deletePost, getPost };