const db = require('');

module.exports = {
    getAllUsers,
    addUser,
    getUserById
}

function getAllUsers () {
    return db("users");
}

function addUser (credentials) {
    return db("users").insert(user);
}

function getUserById (id) {
    return db("users").where({ id })
}
