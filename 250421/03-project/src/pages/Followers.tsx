import { useOutletContext } from "react-router-dom";
// outlet 안에 context를 다룰 때 쓰이는 함수

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();
  console.log(nameOfMyUsers);

  return <h1>Here is {nameOfMyUsers}의 LIst of Followers</h1>;
};

export default Followers;
