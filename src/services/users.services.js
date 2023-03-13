const Users = require("../models/users.models");


class UserServices {
    static async create(newUser) {
        try {
            const createdUser = await Users.create(newUser);
            return createdUser
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            const result = await Users.findAll();
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;