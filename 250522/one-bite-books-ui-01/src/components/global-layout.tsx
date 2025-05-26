import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  //children을 쓰면 자식요소로 Children을 받을 거야
  //자식으로 들어올 것은 reactnode 중에 하나라고 타입을 정의해준것
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>ONE책방</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @Hwichan</footer>
    </div>
  );
};

export default GlobalLayout;
