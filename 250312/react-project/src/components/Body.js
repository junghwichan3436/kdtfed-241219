// const Body = ({ name, location, favorList = [] }) => {
//   return (  // 값이 들어오지 않았다면 에러가 나오지 않게 빈배열을 준다!
//     <h1>
//       {name}은{location}거주합니다
//       <br />
//       {favorList.length}개의 음식을 좋아합니다.
//     </h1>
//   );
// };

const Body = ({ children }) => {
  const handleClick = (e) => {
    console.log(e.target.name);
  };
  console.log(children);
  return (
    <>
      <div>{children}</div>
      <button name="A버튼" onClick={handleClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleClick}>
        B버튼
      </button>
    </>
  );
};

// Body.defaultProps = {
//   // favorList: [],
// };

export default Body;

// 리액트에서 이벤트함수를 인라인 형식으로 뒤에 ()를 쓰면 안됨
