// 기존의 앱컴포넌트가 하는 역할을 Router.tsx에서 한다
//신문법에서는 CreateBrowserRouter를 쓴다
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorComponent from "./components/ErrorComponent";
import User from "./pages/User";
import Followers from "./pages/Followers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        //users만 하면 에러를 반납하고 user뒤에 아이디 값이 하나 들어가야 한다
        element: <User />,
        children: [
          {
            path: "followers", //여기서 followers앞에 /를 준다면 절대경로로 준다는 거기 때문에 /없이 상대경로로 주어야한다
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default Router;
