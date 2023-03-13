const Conversation = require("./conversation.models")
const Messages = require("./message.models")
const Type = require("./type.models")
const Users = require("./users.models")


const initModels = () => {
    Users.hasMany(Messages, {
        foreignKey: "userId"
    })

    Messages.belongsTo(Users, {
        foreignKey: "userId"
    })

    Users.hasMany(Conversation, {
        foreignKey: "userId"
    })

    Conversation.belongsTo(Users, {
        foreignKey: "userId"
    })

    Type.hasMany(Conversation, {
        foreignKey: "typeId"
    })

    Conversation.belongsTo(Type, {
        foreignKey: "typeId"
    })

    Type.hasMany(Messages, {
        foreignKey: "typeId"
    })

    Messages.belongsTo(Type, {
        foreignKey: "typeId"
    })
}

module.exports = initModels;