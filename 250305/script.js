const quotesURL = "https://dummyjson.com/quotes";
const result = document.querySelector("#result");
// console.log(result);

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    //1~30명언 //랜덤
    //명언=> 명언 => 배열 => 인덱스 //0~29
    //배열[인덱스]
    // random함수
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `-${data.quotes[random].author}`;
  })
  .catch(console.log);
// fetch(quotesURL).then().catch((err)=> console.log(err));
