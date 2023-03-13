const { Router } = require("express");
const createConversation = require("../controllers/conversation.controllers");

const conversationRouter = Router();

conversationRouter.post('/api/v1/conversation', createConversation);

module.exports = conversationRouter;