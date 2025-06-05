import express from "express";
import {
  watch,
  getEdit,
  deleteVideo,
  upload,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => {
//   return res.send("Watch Video");
// };
// const handleEditVideo = (req, res) => {
//   return res.send("Edit Video");
// };

videoRouter.get("/upload", upload); //독립적인 값이 항상 최상위로 와야한다
videoRouter.route("/:id").get(watch); //아이디가 숫자라는 것을 알려주면 굳이 /upload를 위로 뺄 필요가 없다!!
// videoRouter.get("/:id/edit", getEdit);
// videoRouter.post("/:id/edit", postEdit);
//메서드체이닝 기법으로 적었다
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id/deleteVideo", deleteVideo);

export default videoRouter;

//비디오라우터는 클라이언트인가 ?
//비디오라우터에서 resfulapi방식으로 서버에서 끌어오니까
//서버는 서버 ?
