import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const port = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);
app.use("/", globalRouter); // 글로벌 루트라우터
//-----------------------------------------
app.use("/users", userRouter); // 로컬라우터
//--------------------------------
app.use("/videos", videoRouter);
//--------------------------------------

const handleListening = () => {
  console.log("✅Server Listening On Port http://localhost:${port}🎃");
};

app.listen(port, handleListening);
