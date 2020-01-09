// IMPORTS
const Users = require('../models/UsersModel.js');
const authMiddleware = require('../middleware/authenticate');

// EXPRESS ROUTER
const router = require('express').Router();

// @ROUTE GET /users
// @DESCRIPTION Gets all users in the database
// @ACCESS Private
router.get('/users', authMiddleware.authenticate, async (req, res) => {
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
router.get("/user", authMiddleware.authenticate, async (req, res) => {
    const { username } = res.decodeJwt;

    try {
      const specifiedUser = await Users.getUser(username);
      res.status(200).json(specifiedUser);
    } catch (err) {
      res.status(500).json({ message: `${err}` });
    }
});

// // @ROUTE GET /:id/watchlist
// // @DESCRIPTION Gets specific watchlist in the database
// // @ACCESS Private
// router.get('/:id/watchlist', authMiddleware.authenticate, bodyMiddleware.validateID, async (req, res) => {
//   try {
//     const singleWatchlist = await Watchlist.getWatchlist(req.params.id);
//     res.status(200).json(singleWatchlist)
//   } catch (err) {
//     res.status(500).json({ message: `${err}` });
//   }
// })


module.exports = router;

