// 첫번째
// const email = document.querySelector("input[type='email']");
// // console.log(email);
// const button = document.querySelector("input[type='button']");
// // console.log(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (email.value !== "") {
//     // @를 기준으로 0번째냐 1번째냐 를 나눈다
//     let userName = email.value.split("@")[0];
//     let domain = email.value.split("@")[1];
//     console.log(userName, domain);
//   }
// });

// 두번째
// const email = document.querySelector("input[type='email']");
// // console.log(email);
// const button = document.querySelector("input[type='button']");
// // console.log(button);
// const result = document.querySelector("#result");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (email.value !== "") {
//     let userName = email.value.split("@")[0];
//     userName = userName.slice(0, 3);
//     let domain = email.value.split("@")[1];
//     result.innerText = `${userName}**@${domain}`;
//   }
// });

// 다른방법(몇자리수인지까지 구분해보자!!!)
const email = document.querySelector("input[type='email']");
// console.log(email);
const button = document.querySelector("input[type='button']");
// console.log(button);
const result = document.querySelector("#result");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (email.value !== "") {
//     let userName = email.value.split("@")[0];
//     userName = userName.slice(0, 3);
//     let domain = email.value.split("@")[1];

//     result.innerText = `${userName}***@${domain}`;
//   }
// });

button.addEventListener("click", () => {
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let domain = email.value.split("@")[1];

    let half = userName.length / 2;
    userName = userName.slice(0, userName.length - half);

    result.innerText = `${userName}***@${domain}`;
    email.value = ""; // 클릭했을 떄 이메일이 지워지고 다시 빈칸이 생기게할려고
  }
});
