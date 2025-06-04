import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

// 비효율적으로 여기안에 함수를 쓸필요없이 컨트롤러를 만들어서 가져와서 쓴다

// const handlhome = (req, res) => {
//   return res.send("Home");
//   next();
// };

// const handleJoin = (req, res) => {
//   return res.send("Join");
//   next();
// };

globalRouter.get("/", trending); // handlehome은 파이널웨어기도 하지만 컨트롤러 이기도 하다
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
