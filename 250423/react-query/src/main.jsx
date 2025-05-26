import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./Router";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider
    client={queryClient}
    //리액트 쿼리의 값을 쓸 수 있게 만들 었따
  >
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={true} buttonPosition="relative" />
  </QueryClientProvider>
);
