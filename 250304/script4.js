//위 주소를 통해서 상품정보를 json 으로 찾아와서 브라우저에 상품명 /생산년도 값을 출력해주세요!!
// const reqres = new XMLHttpRequest();
// reqres.open("GET", "https://reqres.in/api/products", true);
// reqres.send;

// reqres.addEventListener("readystatechange", () => {
//   if (reqres.readyState === 4 && reqres.status === 200) {
//     const reqre = JSON.parse(reqres.responseText);
//     console.log(reqre);
//   }
// });

const url = "https://reqres.in/api/products";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    // console.log(products);
    products.data.forEach((product) => {
      // console.log(product);
      result.innerHTML += `
      <div>
      <p>상품명 : ${product.name}</p>
      <p>생산년도 : ${product.year}</p>
      </div>
      `;
    });
  }
});
