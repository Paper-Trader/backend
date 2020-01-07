// IMPORTS
const Users = require('../models/UsersModel.js');
const bcrypt = require('bcryptjs');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /users
// @DESCRIPTION Gets all users in the database
// @ACCESS Public (will most likely be changed)
router.get('/', async (req, res) => {
    try {
        const allUsers = await Users.getUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
})

// @ROUTE GET /users:id
// @Description Gets a specific user information from the database
// @ACCESS Public (for now...)
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const specifiedUser = await Users.getUsers(id);
      res.status(200).json(specifiedUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;

