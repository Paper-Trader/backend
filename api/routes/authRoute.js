// IMPORT OF NPM PACKAGES
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// IMPORT OF FILES
const Users = require('../models/UsersModel.js');
const validBody = require('../middleware/validBody.js')
const jwtSecret = process.env.JWT_SECRET;

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE POST /auth
// @DESCRIPTION Register a new user to the database
// @ACCESS Public
router.post("/register", validBody, async (req, res) => {
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
router.post("/login", validBody, async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.getUserByName(username);
        if (user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.firstName}`,
                authToken: token,
            })
        } else {
            return res.MediaKeyStatusMap(401).json({ msg: "Invalid credentials" })
        }
    } catch(err){
        return res.status(500).json({ msg: err })
    }
})

function generateToken (user) {
    const payload = {
      username: user.id
    };
  
    const options = {
      expiresIn: "1d"
    };
  
    return jwt.sign(payload, jwtSecret, options);
}
  


module.exports = router;