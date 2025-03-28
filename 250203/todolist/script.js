// 둘다 쓸수 있지만 html에서 submit을 썻기때문에 2번째 쓴느 방식이 정석이다

// const accept = document.querySelector("input[type='submit']");
// // const accept = document.querySelector("#accept");
// accept.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
// });
// document에서 찾아온다
const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];
// save 함수 선언
const save = () => {
  // JSON언어로 바꿔주기 string 문자열로 바꾸어주기
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  // 이벤트 부모요소 찾아오기
  const target = event.target.parentElement;
  // filter투두를 조건에 참인 애들만 찾아오는 함수
  todos = todos.filter((todo) => todo.id != target.id);
  save();

  // 삭제하기
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    // 뒤에 아무것도 안나오게 하기
    // li태그를 만든다
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button);
    li.id = todo.id;
    //뒤에 자식을 하나씩 넣어줄거야 라는 뜻
    // ul 뒤에 li를 넣어준다
    ul.prepend(li);
  }
};

const handler = (event) => {
  event.preventDefault();
  const todo = {
    // 밀리초의 값으로 바꾸어 가지고온다 암호화
    id: Date.now(),
    text: userInput.value,
  };
  todos.push(todo);
  addItem(todo);
  // save 함수를 통해 로컬스토리지에 값을 저장한다
  save();
  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();
form.addEventListener("submit", handler);

// 값을 로컬 저장소에 set한다 (저장한다)
// localStorage.setItem("Hello", "World");
// // 값을 찾아온다
// const myData = localStorage.getItem("Hello");
// console.log(myData);
