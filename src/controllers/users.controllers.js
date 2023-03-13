const UserServices = require("../services/users.services");


const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await UserServices.create(newUser);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await UserServices.getAllUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    getAllUsers,
}