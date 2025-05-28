import BookItem from "@/components/book-item";
// import books from "../../mock/book.json";
// import books from "@/mock/book.json";
import style from "./page.module.css";
import type { BookData } from "@/types";

// 리팩토링 -> 하나의 새로운 컴포넌트
const AllBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다....</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
  // 제이슨데이터는 서버창에서 구현되고 있다. (해당 여기는 server component 이기 때문)
  // 브라우저는 모른다.
};

const RecoBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다....</div>;
  }
  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
        // 전개연산자로 그 안에 있는 모든 값들 구조분해할당으로 불러옴
      ))}
    </div>
  );
};

const Home = async () => {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          <RecoBooks />
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          <AllBooks />
        </section>
      </div>
    </>
  );
};

export default Home;

//여기서 자식요소로 끌고 온것 쌍태그 안에

/*
📌 언제 어떤 걸 써야 할까?
상황별 권장 컴포넌트 종류
사용자 입력, 상호작용 필요   클라이언트 컴포넌트
데이터 페칭, SEO 최적화 필요   서버 컴포넌트
로그인 세션 기반 렌더링 필요   서버 컴포넌트
고정된 UI만 보여줄 때   서버 컴포넌트
 */
// mark -> 목적: 기본적인 sever컴포넌트를 -> client컴포넌트로 바꾸는 형식
//"use client";  > 이 문장하나로 바뀐다.
// 이렇게 선언해야 useEffect 함수등을 사용할 수 있다.
