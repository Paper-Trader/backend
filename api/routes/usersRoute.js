// IMPORTS
const Users = require('../models/UsersModel.js');

// EXPRESS ROUTER
const router = require('express').Router();


// @ROUTE GET users/
// @DESCRIPTION Gets all users in the database
// @ACCESS Public (will most likely be changed)
router.get('/', async (req, res) => {
    try {
        const allUsers = await Users.getAllUsers();
        res.status(200).json(allUsers);
    }
    catch (err) {
        return res.status(500>json({ msg: err }))
    }
})

// @ROUTE GET users/:id
// @Description Gets a specific user information from the database
// @ACCESS Public (for now...)
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const specifiedUser = await Users.getUserById(id);
      res.status(200).json(specifiedUser);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
});

module.exports = router;

