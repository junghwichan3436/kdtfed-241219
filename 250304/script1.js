const xhr = new XMLHttpRequest();
xhr.open("GET", "name.json", true);
// get 방식으로,제이슨을,동기와 비동기를 결정한다
// 동기를하면 안되는 이유 : 그전에가 막히면 그뒤에는 가져오지못한다
xhr.send(); //데이터를 서버에게 보낼거야라는 뜻

//ReadyState
//0: 아직 클라이언트가 서버에 아무런 요청도 하지 않은 상태
//1: 클라이언트가 서버에게 자료를 요청하고 성공한 상태
//2: 클라이언트가 서버에게 자료 요청을 했고, 이에 대한 서버의 응답 회신이 헤더로 도착한 상태
//3 : 서버가 클라이언트에게 자료를 전달해서 해당 자료가 클라이언트의 로컬 컴퓨터로 로딩중인 상태
// 4 : 서버가 전달한 데이터 자료가 정상적으로 클라이언트에게 잘 도착했고, 클라이언트 입장에서 해당 ㅈ데이터를 완전히 사용할 수 있는 단계

// readystate가 어딘지 알아야

// parse 해서 객체방식으로 바꾸어주는 게 우선!!!
// xhr에 이벤트가 발생한다면 readystatechange 0~4단계가 발생한다면
xhr.addEventListener("readystatechange", () => {
  // console.log(typeof xhr.readyState);
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText); //parse가 붙어서 객체화가된다
    console.log(student);
    const result = document.querySelector("#result");
    result.innerHTML = `${student.name} 학생은 ${student.grade}학년입니다`;
  }
});
