const conversationServices = require("../services/conversation.services");

const createConversation = async (req, res) => {
    try {
        const newConversation = await conversationServices.create(req.body)
        res.status(200).send(newConversation)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = createConversation;