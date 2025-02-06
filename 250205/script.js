// console.log(document.querySelectorAll("p")[0]);

// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");

// // newP는 p태그니까 p 태그에 textNode는  Typescript니까 이걸 넣어주어 <p>Typescript<p>를 만들어준다
// newP.appendChild(textNode);
// // 문서 안에 바디안에 <p>Typescript<p>를 넣어준다!
// document.body.appendChild(newP);

const ptag = document.createElement("p");

const ts = document.createTextNode("Typescript");

ptag.appendChild(ts);

document.body.appendChild(ptag);
