// IMPORT OF NPM PACKAGES
const bcrypt = require('bcryptjs');

// IMPORT OF FILES
const Users = require('../models/UsersModel');
const bodyMiddleware = require('../middleware/validBody')
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE POST /auth
// @DESCRIPTION Register a new user to the database
// @ACCESS Public
router.post("/register", bodyMiddleware.validRegisterBody, async (req, res) => {
    let credentials = req.body;
    let hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hash;

    try {
      const addedUser = await Users.addUser(credentials);
      res.status(201).json({ message: "User added", addedUser });
    } catch (err) {
      res.status(500).json({ message: `${err}` });
    }
});

// @ROUTE POST /auth
// @DESCRIPTION Attempts to login
// @ACCESS Public
router.post("/login", bodyMiddleware.validLoginBody, async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.getUserByName(username);
        if (user && bcrypt.compareSync(password, user.password)){
            const token = authMiddleware.generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.firstName}`,
                authToken: token,
            })
        } else res.status(401).json({ msg: "Invalid credentials" })
    } catch(err){
        res.status(500).json({ msg: `${err}` })
    }
})

module.exports = router;