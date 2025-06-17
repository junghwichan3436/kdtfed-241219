import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import rootRouter from "./routers/rootRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extends: true }));

//페이지라우팅이 되기 전에 쿠키값과 세션값을 주고 시작해야한다
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false, //새로고침을 한다고 세션값을 저장하지 마라
    saveUninitialized: false, //들어왔다는 이유만으로 세션값을 초기화시키는걸 막아라 false
    // cookie: {
    //   maxAge: 20000, // 20초뒤에 세션값을 지운다
    // },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }), //db
  })
);

// app.use((req, res, next) => {
//   // res.locals.haenam = "Jang"; //locals안에 있는 값은 퍼그에서 사용할 수 있는데 어떤 퍼그든지 상관없이 사용이 가능하다 !!
//   // res.locals.siteName = "Youtube";
//   req.sessionStore.all((error, sessions) => {
//     //현재 서버에서 관련된 세션을 모두 제어할 수 있는 역할
//     console.log(sessions);
//     next();
//   });
// });

// app.get("/add-one", (req, res, next) => {
//   //다른사람이 들어올때 바뀌어져야한다 세션값이
//   req.session.potato += 1;
//   return res.send(`${req.session.id}\n${req.session.potato}`);
// });

app.use(localMiddleware);
app.use("/uploads", express.static("uploads")); // /uploads에 들어오게 된다면 uploads폴더 안에 값을 보여줘라
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
