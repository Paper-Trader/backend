// IMPORT OF NPM PACKAGES
const express = require("express");
const session = require('express-session');
const morgan = require('morgan');
const cors = require("cors");
const helmet = require("helmet");

// IMPORT OF ROUTES
const authRouter = require('./routes/authRoute.js');
const userRouter = require('./routes/usersRoute.js');

// SERVER INITIALIZATION + MIDDLEWARE
const server = express();

const sessionConfig = {
  name: 'userID', // sid
  secret: 'useID credential data.',
  cookie: {
    maxAge: 1000 * 120,
    secure: false, // true in production
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
}

server.use(session(sessionConfig))
server.use(express.json());
server.use(morgan("combined"));
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
