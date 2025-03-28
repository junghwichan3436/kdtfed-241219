// // 타입별칭
// type Admin = {
//   tag: "ADMIN";
//   name: string;
//   kickcount: number;
// }; //관리자가 가지고 있어야할 타입

// type Member = {
//   tag: "MEMBER";
//   name: string;
//   point: number;
// };

// type Guest = {
//   tag: "GUEST";
//   name: string;
//   visitCount: number;
// };

// type User = Admin | Member | Guest;

// // const login = (user: Admin | Member | Guest) => {};
// // 둘다 같다
// // const login = (user: User) => {
// //   if ("KickCount" in user) {
// //     console.log(`${user.name}님 현재까지 ${user.KickCount}명을 추방했습니다.`);
// //   } else if ("point" in user) {
// //     console.log(`${user.name}님 현재까지 ${user.point}명을 모았습니다.`);
// //   } else if ("visitCount" in user) {
// //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
// //   }
// // };

// // switch문을 이용해서 tag를 지정해 이렇게도 쓸 수 있다
// const login = (user: User) => {
//   switch (user.tag) {
//     case "ADMIN": {
//       console.log(
//         `${user.name}님 현재까지 ${user.kickcount}명을 추방했습니다.`
//       );
//       break;
//     }
//     case "MEMBER": {
//       console.log(`${user.name}님 현재까지 ${user.point}명을 모았습니다.`);
//       break;
//     }
//     case "GUEST": {
//       console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
//       break;
//     }
//   }
// };

// // ------------------------------------------------

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS"; // 유니온 타입으로 state에 넣는다
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// const loading = {
//   state: "LOADING",
// };

// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류발생 원인은...",
//   },
// };

// const success = {
//   state: "SUCCESS",
//   response: {
//     data: "data...",
//   },
// };

// const processResult = (task: AsyncTask) => {
//   switch (task.state) {
//     case "LOADING": {
//       console.log("로딩중");
//       break;
//     }
//     case "FAILED": {
//       console.log(`에러발생: ${task.error!.message}`);
//       break;
//     }
//     case "SUCCESS": {
//       console.log(`성공 :${task.response?.data}`);
//       break;
//     }
//   }
// };

// processResult(success);
