// IMPORT OF NPM PACKAGES
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const helmet = require("helmet");
// const session = require('express-session');

// IMPORT OF ROUTES
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/usersRoute');

// const sessionConfig = {
//   name: 'userID', // sid
//   secret: 'useID credential data.',
//   cookie: {
//     maxAge: 1000 * 120,
//     secure: false, // true in production
//     httpOnly: true,
//   },
//   resave: false,
//   saveUninitialized: false,
// }

// SERVER INITIALIZATION + MIDDLEWARE
const server = express();

// server.use(session(sessionConfig))
server.use(express.json());
server.use(morgan("combined"));
server.use(cors());
server.use(helmet());

// ROUTES USED
server.use('/auth', authRouter);
server.use('/users', userRouter);

module.exports = server;
