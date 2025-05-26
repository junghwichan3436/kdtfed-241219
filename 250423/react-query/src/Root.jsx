import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import GlobalStyles from "./Styles/GlobalStyles.styles";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet //context를 활용하여 state를 전달할 수 있다
      />
    </>
  );
}

export default Root;
