const TypeServices = require("../services/type.services");

const getAllConversation = async (req, res) => {
    try {
        const {idType} = req.params;
        const getMessage = await TypeServices.getConversation(idType);
        res.json(getMessage);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = getAllConversation;