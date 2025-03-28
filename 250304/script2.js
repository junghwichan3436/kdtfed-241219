const xhr = new XMLHttpRequest();
xhr.open("GET", "student.json", true); //데이터 초기화
xhr.send();
// 찾아오기

const rederHTML = (contents) => {
  const result = document.querySelector("#result");
  let output = "";
  contents.forEach((content) => {
    output += `
    <h2>${content.name}</h2>
    <ul>
    <li>전공 : ${content.major}</li>
    <li>학년 : ${content.grade}</li>
    </ul>
    <hr/>
    `;
  });
  result.innerHTML = output;
};

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    rederHTML(students);
    console.log(students);
  }
});
