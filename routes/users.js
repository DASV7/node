const express = require('express');
const user = require('../models/user');
const router = express.Router();


//create user
router.post('/', async (req, res) => {
    const User = new user({
        user: req.body.user,
        password: req.body.password
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
        const postIdJson = await post.find(req.params.postId)
        res.json(postIdJson);
    } catch (err) {
        res.json({ message: err });
    }

})

// LOGIN
router.post('/login', async (req, res) => {
    // validate login
    const body = req.body;
    const usuarioDB = await user.findOne({ user: body.user });
    if (!usuarioDB) {
        return res.status(400).json({
            mensaje: 'Usuario! o contraseña inválidos',
        });
    }
    // validate de password 
    const validPassword = await user.findOne({ password: body.password })
    if (!validPassword) return res.status(400).json({ error: 'Constraseña invalida' })

    res.json({
        error: null,
        data: 'bienvenido'
    })
})

module.exports = router;