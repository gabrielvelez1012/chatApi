const Conversation = require("../models/conversation.models");


class conversationServices {
    static async create(newConversation){
        try {
            const result = await Conversation.create(newConversation)
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = conversationServices;