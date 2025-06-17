import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import {
  protectedMiddleware,
  publicOnlyMiddleware,
  avatarUpload,
} from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectedMiddleware, logout);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin); //로그인이 되어지지 않은 사람만 github로그인이 가능하다!!
userRouter
  .route("/edit")
  .all(protectedMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit); //protectedMiddleware로그인한 사람만 /edit페이지에 와야한다
userRouter
  .route("/change-password")
  .all(protectedMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/:id", see);

export default userRouter;
