import { users } from "../db";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

const Title = styled.h1`
  font-size: 32px;
`;

const ListGroup = styled.ul`
  display: flex;
  gap: 10px;
`;

const ListItem = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
//URLSearchParams는 브라우저에서 URL의 쿼리 문자열(query string)을 쉽게 다루도록 도와주는 내장 객체입니다.

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  //readSearchParams 상단에 쿼리값을 읽어들인다
  // console.log(readSearchParams.get("geo"));
  //readSearchParams는 두가지 값을 쓸수 있는데
  //키에 매칭되어지는 값을 찾아온다 =get
  //값이 있는지 없는지 알아본다 = has boolean값으로 반환

  // setSearchParams ??

  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "0422",
    });
  }, 3000);
  return (
    <div>
      <Title>Users List</Title>
      <ListGroup>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            {/* 해당 버튼을 클릭했을 때 어디로 갈지 정함 */}
          </ListItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;
