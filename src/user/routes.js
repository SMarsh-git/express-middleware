const { Router } = require("express");
const { addUser, login, updateUser, deleteUser } = require("./controllers");
const { hashPass, unHash, decrypt } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", unHash, login);
userRouter.get("/user", decrypt, login);
userRouter.delete("/user/:username", decrypt, deleteUser);

module.exports = userRouter;