// IMPORTS
const Users = require('../models/UsersModel.js');
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /users
// @DESCRIPTION Gets all users in the database
// @ACCESS Private
router.get('/', authMiddleware.authenticate, async (req, res) => {
    try {
        const allUsers = await Users.getUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

// @ROUTE GET /users:id
// @Description Gets a specific user information from the database
// @ACCESS Private
router.get("/:id", authMiddleware.authenticate, async (req, res) => {
    const { id } = req.params;
    try {
      const specifiedUser = await Users.getUsers(id);
      res.status(200).json(specifiedUser);
    } catch (err) {
      res.status(500).json({ message: `${err}` });
    }
});

module.exports = router;

