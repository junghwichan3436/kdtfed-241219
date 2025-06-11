import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id").get(watch);
// videoRouter.get("/:id/edit", getEdit);
// videoRouter.post("/:id/edit", postEdit);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
