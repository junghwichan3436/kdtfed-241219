import mongoose from "mongoose";

const videoScheme = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoScheme); //Video라는 DB(Youtube)안에 있는 테이블은 이러한 스키마형태로 들어와야한다는 것을 알려줌

export default Video;

// Video는 하나의 테이블이다
