const Messages = require("../models/message.models");


class MessageServices {
    static async create(newMessage){
        try {
            const result = await Messages.create(newMessage)
            return result
        } catch (error) {
            throw error;
        }
    }

}

module.exports = MessageServices;