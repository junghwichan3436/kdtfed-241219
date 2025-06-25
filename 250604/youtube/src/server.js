import "./db"; //서버가 켜지면 이것부터 찾아와
// import Video from "./models/video";
import "./models/video"; // 이렇게 도 끌어올 수 있다 서버가 켜지면 이것부터 찾아와
//from을 쓰지 않았다 서버가켜지면 몽고디비에 값을 넣어야하기 때문에 from을 써주지 않아도 된다 갖고 와서 편집하지 않을 것이기 때문에
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extends: true }));
app.use("/", globalRouter); // 글로벌 루트라우터
//-----------------------------------------
app.use("/users", userRouter); // 로컬라우터
//--------------------------------
app.use("/videos", videoRouter); // 로컬라우터
//--------------------------------------



export default app;
