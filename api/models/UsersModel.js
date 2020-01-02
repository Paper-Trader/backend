const db = require('');

module.exports = {
    getAllUsers,
    addUser,
    getUserById,
    getUserByName
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

function getUserByName (username){
    return db("users").where({ userName: username })
}
