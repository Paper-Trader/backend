// IMPORT OF NPM PACKAGES
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const helmet = require("helmet");

// IMPORT OF ROUTES
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/usersRoute');
const portfolioRouter = require('./routes/portfolioRoute');
const watchlistRouter = require('./routes/watchlistRoute');

// SERVER INITIALIZATION + MIDDLEWARE
const server = express();

server.use(express.json());
server.use(morgan("combined"));
server.use(cors());
server.use(helmet());

// ROUTES USED
server.use('/auth', authRouter);
server.use('/', userRouter);
server.use('/portfolios', portfolioRouter);
server.use('/watchlists', watchlistRouter);

// HOMEPAGE ROUTING
server.get("/", (req, res) => {
  res.send({ msg: "Server is up and running" });
});

module.exports = server;
