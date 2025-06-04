import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => {
//   return res.send("Watch Video");
// };
// const handleEditVideo = (req, res) => {
//   return res.send("Edit Video");
// };

videoRouter.get("/upload", upload); //독립적인 값이 항상 최상위로 와야한다
videoRouter.get("/:id", see); //아이디가 숫자라는 것을 알려주면 굳이 /upload를 위로 뺄 필요가 없다!!
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/deleteVideo", deleteVideo);

export default videoRouter;

//비디오라우터는 클라이언트인가 ?
//비디오라우터에서 resfulapi방식으로 서버에서 끌어오니까
//서버는 서버 ?
