// IMPORT OF NPM PACKAGES
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// IMPORT OF ROUTES

// SERVER INITIALIZATION + MIDDLEWARE
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

// ROUTES USED

// HOMEPAGE ROUTING
server.get("/", (req, res) => {
  res.send({ msg: "Server is up and running" });
});

module.exports = server;
