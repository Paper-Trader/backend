//ENV Configuration
require("dotenv").config();

// SERVER
const server = require("./api/server.js");

// PORT
const PORT = process.env.PORT || 9001;

// LISTENING
server.listen(PORT, () => console.log(`***Server listening on http://localhost:${PORT}***`));
