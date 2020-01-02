// IMPORT OF FILES
const Users = require('../models/UsersModel.js');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE POST /register
// @DESCRIPTION Register a new user to the database
// @ACCESS Public
router.post("/register", async (req, res) => {
    if (!req.body) {
      return res.status(500).json({ msg: "Nothing in req.body" });
    }
    let credentials = req.body;
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
router.post("/login", async (req, res) => {

})

module.exports = router;