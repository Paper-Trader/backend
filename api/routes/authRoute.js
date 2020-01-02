// IMPORT OF NPM PACKAGES
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// IMPORT OF FILES
const Users = require('../models/UsersModel.js');
const validBody = require('../middleware/validBody.js')
const jwtSecret = process.env.JWT_SECRET;

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE POST /register
// @DESCRIPTION Register a new user to the database
// @ACCESS Public
router.post("/register", validBody, async (req, res) => {
    let credentials = req.body;
    let hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hash;
    try {
      const addedUser = await Users.addUser(credentials);
      return res.status(201).json({ message: "User added", addedUser });
    } catch (err) {
      res.status(500).json({ message: "Error adding user." });
    }
});

// @ROUTE POST /login
// @DESCRIPTION Attempts to login
// @ACCESS Public
router.post("/login", validBody, async (req, res) => {
    
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