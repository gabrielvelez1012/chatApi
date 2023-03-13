const Conversation = require("../models/conversation.models");
const Messages = require("../models/message.models");
const Type = require("../models/type.models");
const Users = require("../models/users.models");


class TypeServices {
    static async getConversation(idType){
        try {
            const result = await Type.findByPk(idType,{
                include: [
                    {
                        model: Conversation,
                        attributes: ["id"],
                        include: {
                            model: Users,
                            attributes: ["username"]
                        }
                    }, 
                    {
                        model: Messages,
                        attributes: ["content"],
                            include: [{model: Users,
                            attributes: ["username"]
                        }]
                    }
                ]
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TypeServices;