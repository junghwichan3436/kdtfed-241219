import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>{new Date().toLocaleString()}</div>{" "}
      {/* 날짜 적용 (캐시값이 기존데이터는 파괴시키고 새로운 데이터를 받아온다 ) */}
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        {/*Suspense를 써서 아직 미완료된 클라이언트 컴포넌트야 라는걸 알려준다 */}
        <Searchbar /> {/* Searchbar도 안에서 감싸준다! */}
      </Suspense>
      {children}
      {/*{children} 을 씀으로써 자식요소로 받는다 search 페이지들을 */}
    </>
  );
};

export default Layout;

// search안에 모든 폴더들에게 같은 레이아웃을 적용하고 싶을 때 글로벌css와 같은 거
