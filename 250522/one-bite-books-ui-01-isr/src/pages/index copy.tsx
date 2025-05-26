import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react"; // 컴포넌트의 생애주기 관리할 때는 useeffect
import style from "./index.module.css";

export default function Home() {
  const router = useRouter();
  const onclickButton = () => {
    router.push("/test");
    //push = 어디로 보낸다
    // router.replace("/test");
    //뒤로가기가 되지 않는다
    // router.back();
    //뒤로갈 수 있게 해준다
  };
  useEffect(() => {
    router.prefetch("/test");
  }, []); //프로그래매틱한 페이지는 프리페칭을 해주기 위해
  //   link tag만 프리페칭을 한다
  // 프로그래매틱한 페이지는 프리페칭을 하지 않는다
  return (
    <>
      <header>
        <Link href={"/"}></Link>
        &nbsp;
        <Link href={"/search"}></Link>
        &nbsp;
        <Link href={"/book/1"}></Link>
        <div>
          <button onClick={onclickButton}>Test 페이지로 이동</button>
        </div>
      </header>
      <h1 className={style.h1}>index</h1>
    </>
  );
}

//navigation : Link & href

// 프로그래매틱 이동 : Programmatic Navigation :
// 단순히 a태그 처럼 어디론가 이동하는 것만 신경쓰는 것이 아니라 , 특정 조건 및 사용자의 이벤트 행위에 따랄 이동경로를 관리 제어 할 수 있다.
