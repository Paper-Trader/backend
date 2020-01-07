// IMPORT OF NPM PACKAGES
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const helmet = require("helmet");

// IMPORT OF ROUTES
const authRouter = require('./routes/authRoute.js');
const userRouter = require('./routes/usersRoute.js');

// SERVER INITIALIZATION + MIDDLEWARE
const server = express();

server.use(express.json());
server.use(morgan("combined"));
server.use(cors());
server.use(helmet());

// ROUTES USED
server.use('/auth', authRouter);
server.use('/users', userRouter);

module.exports = server;
