/*

1.변수

로컬변수
매개변수

2.자료형

3.형변환

4.연산자

5.조건문

6.반복문

7.함수

8.DOM

오늘 배우는 것 EVENT

9.EVENT
- 브라우저를 통해서 특정 웹페이지 도착
- 사용자가 하는 행위 모든 것
- 페이지를 확인 // 버튼클릭 // 스크롤 이동
- 이벤트를 설정
- event handler => onclick 과거에는 이벤트 핸들러를 많이 사용
- addEventListner() 현재는 이걸 많이 사용
- 이벤트 설정 > 이벤트 실행 > 로컬 컴퓨터 > 메모리 공간 > 이벤트 객체 생성 > 이벤트 객체를 참조변수 값으로 찾아올 수 있다
- 이벤트 객체 > preventDefault() 유일한 메서드 함수 나머지는
거의 다 속성 값이더라

이벤트 속성 종류 

1.문서(document) 로딩 이벤트
- load 이벤트 : 개발자가 작성한 문서를 모두 로딩하면 실행하도록 하는 이벤트 종류
- resize 이벤트 : 디바이스(매체:테블릿,모바일,컴퓨터)의 영향을 받는다 문서 화면 크기가 변경되었을 때 사용하는 이벤트 종류

2. 마우스(mouse) 이벤트 {마우스가 있어야 됨 태블릿 컴퓨터 등}
- click 이벤트 : 버튼 혹은 특정 요소들을 클릭했을 때 실행되독록 하는 이벤트
- double click 이벤트 :버튼 혹은 특정 요소들을 더블클릭했을 때 실행되독록 하는 이벤트
버블링 : 마우스를 본인에게 올렸을 때 콘솔창에 부모요소도 같이 숫자가 올라가는 것 
- mouseover 이벤트 :특정요소 위에 마우스를 올렸을 때(*버블링 기본적용)
- mouseout 이벤트 :특정요소 위에 마우스를 떠나게 했을때(*버블링 기본적용)
- mouseenter 이벤트 :특정요소 위에 마우스를 올렸을 때(*버블링 적용안됨)
- mouseleave 이벤트 : 특정요소에서 마우스를 떠나게 했을 때(*버블링 적용안됨)

3.키보드 이벤트 (검색할때 ,로그인 할때)
- keydown : 사용자가 key를 누르고 있는 동안 발생되는 이벤트
- keyup : 사용자가 key를 눌렀다 뗐을 때 발생되는 이벤트

4.폼 이벤트
- change
- focus
- blur
- submit

*/
// load 이벤트
// window.onload = alert("안녕하세요!");

// color 이벤트
// const button = document.querySelector("button");

// button.onclick = fuction() {
//   document.body.style.backgroundColor = "green";
// }

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// 키보드이벤트
// document.body.addEventListener("keydown", (event) => {
//   document.querySelector(
//     "#result"
//   ).innerText = `code : ${event.code}, key : ${event.key}`;
// });
