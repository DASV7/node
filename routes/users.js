const express = require('express');
const router = express.Router();
const user = require("../models/user");

//create user
router.post('/', async (req, res) => {
    const User = new user({
        user: req.body.user,
        password: req.body. password
    });
    try {
        const savedJson = await User.save();
        res.json(savedJson);
    } catch (err) {
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

//Login whith get
/*router.post("/", async (req, res) => {
    const findUserByRequest = await new user({
        user: req.body.user,
        password: req.body.password
    });




})
*/

module.exports = router;