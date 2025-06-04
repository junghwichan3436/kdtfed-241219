import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

// controller로 빼줌

// const handleEditUser = (req, res) => {
//   return res.send("Edit User");
// };

// const handleDeleteUser = (req, res) => {
//   return res.send("Delete User");
// };

userRouter.get("/logout", logout);
userRouter.get("/:id", see);
userRouter.get("/:id/edit", edit);
userRouter.get("/:id/delete", remove);

export default userRouter;
