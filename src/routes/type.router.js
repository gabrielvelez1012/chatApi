const { Router } = require("express");
const getAllConversation = require("../controllers/type.controllers");

const typeRouter = Router();

typeRouter.get('/api/v1/typeConversation/:idType/message', getAllConversation);

module.exports = typeRouter;