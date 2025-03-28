import React from "react";

const Header = () => {
  // console.log("Header 업데이트");
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
// 특정값이 필요하다면 인자값을 주지만 그 어떤 것에도 의존하지 않겠다하면 감싸안으면된다
