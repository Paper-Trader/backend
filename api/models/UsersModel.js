const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    addUser,
    getUserByName
}

function getUsers (id) {
    let query = db('users as u')
        .select('u.id', 'u.email', 'u.username', 'u.password', 'u.firstName', 'u.lastName')

    if (id) {
        return query.where({ id }).first();

        // return Promise.all([query, this.getProjects(id)])
        //     .then(function(results) {
        //     let [user, projects] = results

        //     if (user) {
        //         user.projects = projects;

        //         return mappers.userToBody(user)
        //     } else {
        //         return null;
        //     }
        //     })
    }

    return query
}

function addUser (credentials) {
    return db("users").insert(user);
}

// function getUserById (id) {
//     return db("users").where({ id })
// }

function getUserByName (username){
    return db("users").where({ userName: username })
}
