// import express from "express";

// const app = express();
// const port = 4000;

// const logger = (req, res, next) => {
//   console.log(`${req.method}: ${req.url}`);
//   next(); //미들웨어를 실행시키고 다음걸 실행시켜야하기 때문에 next 함수를 꼭 써줘야한다
// };

// const privateMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url !== "/protected") {
//     return res.send("<h1>Not Allowed<h1/>");
//   }
//   console.log("Allowed, you may countinue");
//   next();
// };

// const handleHome = (req, res) => {
//   //요청과 응답을 할 수 있는 참조 변수이기 때문에 이름변경이 가능하나 전자는 요청 후자는 응답이 와야한다
//   return res.send("I'm here");
// };

// const handelProtected = (req, res) => {
//   return res.send("Welcome to the private lounge");
// };

// //end 는 메세지를 주고 끝낸다
// //send 는 메세지를 주고 다음걸 할수 있다 middleware 같은 것
// // const handleLogin = (req, res) => {
// //   return res.send({ message: "Login Here..." });
// //}; // 객체형태로 하면 직접 제이슨을 만들 수 있다

// app.use(logger); // 미들웨어를 따로 빼내기(인자값이 많아지면 지저분해지니까 , 전역에서 쓸수 있다)
// app.use(privateMiddleware); //두번째 글로벌 미들웨어함수 실행
// app.get("/", handleHome); //미들웨어를 거쳤다가 파이널 웨어가기
// app.get("/protected", handelProtected);
// // 미들웨어를 반드시 파이널 웨어 전에 써야 정상 작동한다
// // middleware함수 , finalware함수라고 부른다
// // app.get("/login", handleLogin);

// const handleListening = () => {
//   console.log("✅Server Listening On Port http://localhost:${port}🎃");
// };

// app.listen(port, handleListening);
