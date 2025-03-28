// 데이터 통신을 할 때,데이터가 정상적으로 들어왔는지에 따라 처리해줄수 있는 방법을 이원화 할 수 있는데, 그때 사용하는 방법이 바로 "예외처리" 방식 입니다

//예외 처리 방식은
//데이터가 정상적으로 들어왔을 때 => try문을 사용하고!
//데이터가 정상적으로 들어오지 못했을 때 => catch 문을 사용합니다!
//데이터의 유입과 무관하게 최종적인 메세지를 전달하고자 할때 => finally  문을 사용합니다

// 예외처리 방식을 사용하지 않는 경우에는

// try {
//   console.log("시작");
//   add();
//   console.log("실행중...");
// } catch (err) {
//   alert(`에러이름 : ${err.name}`);
//   alert(`에러내용 : ${err.message}`);
//   alert(`전체에러 : ${err}`);
// } finally {
//   console.log("끝");
// }

// console.log("시작");
// add();
// console.log("실행중...");
// console.log("끝");

//중간에서 멈춘것
// 똥싸다가 멈추고 나온것
// 에러도 객체이다

// json안에들어가는 객체는 문자열이다

const json = `{ "grade": 3, "age": 20 }`;

try {
  const user = JSON.parse(json);
  if (!user.name) {
    // throw "사용자 이름이 없읍니다!"; // 보통 이렇게 쓰는데
    throw new Error("사용자 이름이 없읍니다!"); //이렇게도 쓴다
  }
  // console.log(user.name);
} catch (err) {
  // console.log(`에러발생 : ${err}`);
  console.error(err);
}
