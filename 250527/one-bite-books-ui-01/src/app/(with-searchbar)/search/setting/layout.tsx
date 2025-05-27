import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>또다른서치바</div>
      {children}
    </>
  );
};

export default Layout;

// setting 하위 요소들이 전부 적용되는 레이아웃
