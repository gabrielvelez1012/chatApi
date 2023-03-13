const { Router } = require("express");
const { createUser, getAllUsers } = require("../controllers/users.controllers");


const userRouter = Router();

userRouter.post('/api/v1/user', createUser);
userRouter.get('/api/v1/user', getAllUsers);

module.exports = userRouter;