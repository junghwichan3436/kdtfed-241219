//단축키를 쓴다
// rafce
//확장에서 react검색 ES7+ React/Redux/React-Native snippets 설치하면가능
// const Body = () => {
//   const num = 19;
//   //식은 jsx문법에서 사용이 가능하나, 문은 JSX문법에서 사용이 불가
//   //리턴문 바깥에서 if를 쓸 수 있다!!!
//   if (num % 2 === 0) {
//     return <div>{num}은 짝수 입니다.</div>;
//   } else {
//     return (
//       <div style={{ background: "#f00", color: "#fff" }}>
//         {num}은 짝수 입니다.
//       </div>
//     ); //무언가를 객체화하고자하는 니즈가 있다
//   }
// };

// export default Body;
// ---------------------------------
// import React from "react";
// import "./Body.css";

// const Body = () => {
//   return (
//     <>
//       <h1 className="body">Body</h1>;
//       {/* //h1이날라다니고 스타일시트가 날라다녀도
//       자바스크립트다!!! */}
//       <h1 className="body">Body</h1>
//       <h1 id="test">ID Value</h1>
//     </>
//   );
// };

// export default Body;

// ---------------------------------------

import React from "react";
import "./Body.css";

const Body = (name) => {
  console.log(name);
  return (
    <>
      <h1>Body</h1>
    </>
  );
};

export default Body;
