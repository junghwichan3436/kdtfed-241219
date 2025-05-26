import GlobalStyles from "./styles/GlobalStyles.styles";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Moives from "./pages/Moives";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  //페이지 라우팅을 한다
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // /값을 그대로상속받는 메인페이지가 되겠다라는뜻
      // Home이라는컴포넌트는 Layout이라는 컴포넌트를 상속받았다
      { path: "movies", element: <Moives /> },
      //movie라는 경로를 찾아온다면 Movies라는 컴포넌트가 나온다
      { path: "movie/:id", element: <MovieDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
