const { Router } = require("express");
const { createMessage } = require("../controllers/message.controllers");


const messageRouter = Router();

messageRouter.post('/api/v1/message', createMessage);

module.exports = messageRouter;