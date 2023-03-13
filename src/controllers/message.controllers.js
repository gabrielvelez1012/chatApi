const MessageServices = require("../services/message.services")

const createMessage = async (req, res) => {
    try {
        const newMessage = req.body
        const message = await MessageServices.create(newMessage)
        res.status(200).json(message)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createMessage,
}