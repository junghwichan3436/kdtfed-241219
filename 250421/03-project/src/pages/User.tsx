import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

interface IDarkMode {
  darkMode: boolean;
}

const User = () => {
  const { userId } = useParams();
  const { darkMode } = useOutletContext(IDarkMode);
  console.log(darkMode);

  return (
    <>
      <h1>
        User with ID{userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet //oulet의 효과로 props의 객체의 값을 전달받았다
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
      {/* 여기서부턴 바뀌서 oulet위에는 공통 */}
    </>
  );
};

export default User;
