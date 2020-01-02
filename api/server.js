// IMPORT OF NPM PACKAGES
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// IMPORT OF ROUTES
const authRouter = require('./routes/authRoute.js');
const userRouter = require('./routes/usersRoute.js');

// SERVER INITIALIZATION + MIDDLEWARE
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

// ROUTES USED
server.use('/auth', authRouter);
server.use('/users', userRouter);

// HOMEPAGE ROUTING
server.get("/", (req, res) => {
  res.send({ msg: "Server is up and running" });
});

module.exports = server;
