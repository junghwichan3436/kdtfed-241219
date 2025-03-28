//fetch() => API
// fetch함수는 promise 프로토타입을 반환한다
// promise는 then이라는 메소드 함수를 쓸수 있다

const result = document.querySelector("#result");

fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    result.forEach((student) => {
      output += `
      <h2>${student.major}</h2>
      <ul>
      <li>전공 : ${student.major}</li>
      <li>전공 : ${student.grade}</li>
      </ul>
      `; //복합대입연산자로 값을 재할당
    });
    result.innerHTML = output;
  })
  .catch((err) => console.error(err));

// xhr 이라는 인스턴스함수는 parse를 써야하지만
// fetch를 활용해 데이터를 찾아올때는 json이라는 함수가 안에 있기 때문에 .json을 쓸 수 있음
//기존에 우리가 객체로 변환하려면 parse()라는 함수를 썻지만
//fetch라는 함수를 쓸때는 .json 함수가 그자리를 대신한다
// 데이터를 찾아오지 못할시 catch로 오류사항을 써주면된다
