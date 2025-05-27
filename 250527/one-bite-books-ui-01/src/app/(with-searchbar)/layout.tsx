import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>임시서치바</div>
      {children}
      {/*{children} 을 씀으로써 자식요소로 받는다 search 페이지들을 */}
    </>
  );
};

export default Layout;

// search안에 모든 폴더들에게 같은 레이아웃을 적용하고 싶을 때 글로벌css와 같은 거
