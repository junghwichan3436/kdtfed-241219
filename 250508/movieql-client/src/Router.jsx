import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
