const result = document.querySelector("#result");

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get("search-box");
console.log(query);

result.innerText = `${query} 영화페이지 입니다!`;
// 범죄도시 두번째 클릭했을때 들어가는 것
// 'https://api.themoviedb.org/3/search/movie?query=%EB%B2%94%EC%A3%84%EB%8F%84%EC%8B%9C&include_adult=false&language=ko-kr&page=1'
