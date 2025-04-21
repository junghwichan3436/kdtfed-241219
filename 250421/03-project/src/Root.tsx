import { Outlet } from "react-router-dom";
//Outlet 이 있어야 자식을 받을 수 있다
import Header from "./components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </>
  );
};

export default Root;
