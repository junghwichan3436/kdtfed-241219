import mongoose from "mongoose";

// const formatHashtags = (hashtags) => {
//   return hashtags.split(",").map((word) => {
//     word.startsWith("#") ? word : `#${word}`;
//   });
// };

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    uppercase: true,
    trim: true,
    maxLength: 80,
    required: true,
  },
  fileUrl: { type: String, required: true },
  description: { type: String, required: true, minLength: 20, trim: true }, // trim :공백제거 옵션
  createdAt: { type: Date, default: Date.now, required: true },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true },
    rating: { type: Number, default: 0, required: true },
  },
  owner: {
    // 비디오를 갖고 있는 사용자 정의하기
    type: mongoose.Schema.Types.ObjectId, //ObjectId를 꺼내준다
    required: true,
    ref: "User",
  },
});
// pre함수는 findByIdAndUpdate 공존이 불가능하다
//그래서 static으로 바꾸면 된다

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
  // this.hashtags = this.hashtags[0]
  //   .split(",")
  //   .map((word) => (word.startsWith("#") ? word : `#${word}`)); //#이 없는건 붙여주고 있는 건 그냥 둔다!!
}); //hashtags를 여기서 정의해주면서 videoController에서의 코드가 깔끔해진다

const Video = mongoose.model("Video", videoSchema);
export default Video;
