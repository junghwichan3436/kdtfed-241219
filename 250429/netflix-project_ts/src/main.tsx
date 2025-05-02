import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Router.tsx";

// 리액트 쿼리를 쓰기위한 기본세팅
// 프로토타입이기 때문에 new라는 생성어로 설정후 사용
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider> // 전역요소에 제공하겠단 의미
);
