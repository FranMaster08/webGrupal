const db = require('../database/models');

const usersModel = {
    /* Return all the information from the database */
    findAll: async function () {
        return await db.users.findAll({
            include: [{ association: "userCategory" }]
        })
    },

    /* Find a user by its ID */
    findByPk: async function (id) {
        return await db.users.findByPk(id);
    },

    /* Find an user by a particular filed */
    /* Example: field = 'email' / text = 'da.aramayo1990@gmail.com' */
    findByField: async function (field, text) {
        return await db.users.findOne({
            where: { [field]: text }
        })
    },

    /* Find all users by a particular filed */
    /* Example: field = 'email' / text = 'da.aramayo1990@gmail.com' */
    findAllByField: async function (field, text) {
        return await db.users.findAll({
            where: { [field]: text }
        })
    },

    /* Save the new user in the database */
    create: async function (newUser) {
        await db.users.create(newUser)
    },

    /* Update the user in the database */
    update: async function (userData, id) {
        await db.users.update({
                user: userData.user,
                name: userData.name,
                surname: userData.surname,
                email: userData.email,
                image: userData.image,
                password: userData.password,
                idUserCategory: userData.idUserCategory,
        },{
            where: { id: id }
        })
    },

    /* Delete the user from the database */
    delete: async function (id) {
        await db.users.destroy({
            where: { id: id }
        })
    }
}

module.exports = usersModel;