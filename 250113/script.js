//한글로 지금내가 제어하고자하는 내용이 무엇인지 부터 작성해보기//

//논리적이라서!!

//내가 현재 구현하고자 하는 기능을 대략적이지만 말로 표현하지 못한다면, 100% 코딩은 불가능하다!! (논리적으로 이해해야한다는 말)//
//8개의 면들을 가지고 모션 제어

//8개의  face를 대상으로 모션 제어
// 1.컴퓨터에게 무엇이 8개의 face 인지 알려주기
//2 .8개의 face를 어딘가에 담아서 컴퓨터에게 "이게 8개의 페이스야 !" 라고 알려주어야 함
// 3. 그 어딘가에 담고자하는 그릇 => 변수

//해당 모션 : 각가의 face에 마우스를 올리면 회전이 멈춤

//해당 모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적을 진행

// 변수선언하기위한 예약어 const
// 전체값 불러오기
const circle = document.querySelector("#circle");
// circle을 console안에서 볼수있게 하는 명령어
// 전체값안에서 또 나눠 불러오기
console.log(circle);
// 하나하나 말할 수없으니까 여러개복수를 한번에준다 articles,querySelectorAll
const articles = circle.querySelectorAll("article");
// => 콜백 함수라고 부름
articles.forEach((article) => {
  // 이벤트를 주는것(할일을 주는 것)
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
