const express = require('express');
const router = express.Router();
const post = require('../models/post');

//all posts 
router.get('/', async (req, res) => {
    try {
        const posts = await post.find();
        res.json(posts)
    }
    catch (err) {
        res.json({ message: err })
    }
})
//get by id
router.get("/:postId", async (req, res) => {
    console.log(req.params.postId);
    try {
        const postIdJson = await post.findById(req.params.postId)
        res.json(postIdJson);
    } catch (err) {
        res.json({ message: err });
    }

})

//delete item
router.delete("/:postId", async (req, res) => {
    try {
        const deleteResponse = await post.remove({ _id: req.params.postId })
        res.json(deleteResponse);
    }
    catch (err) {
        res.json({ message: err })
    }
})

//add posts
router.post('/', async (req, res) => {
    const Post = new post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedJson = await Post.save();
        res.json(savedJson);
    } catch (err) {
        res.json({ message: err })
    }

})

//update post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await post.updateOne({ _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description
                }
            }
        )
        res.json(updatePost)
        console.log(req.params.postId);
    }
    catch (err) {
        res.json({ message: err })
    }

})

module.exports = router;