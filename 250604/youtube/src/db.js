import mongoose from "mongoose";

mongoose.connect(
  "mongodb://127.0.0.1:27017/youtube"
  //youtube라는 DB로 접속해라!!
);

const db = mongoose.connection; //연결

const handleOpen = () => console.log("✅ Connected to DB👻");

const handleError = () => console.log("✅ DB Error 🎃", error);

db.on("error", handleError); //error가 발생한다면 DB Errror 를 찍어주겠다
//on은 error가 발생할 때마다 실행
db.once("open", handleOpen); //once최초에 한번만 실행
