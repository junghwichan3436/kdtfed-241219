import BookItem from "@/components/book-item";
// import books from "../../mock/book.json";
// import books from "@/mock/book.json";
import style from "./page.module.css";
import type { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

//> 아래 Route Segment option 은 가급적 사용 지양
//> !important
// 1. auto : 그냥 컴포넌트 페이지가 기본적으로 가지고 있는 속성을 자동으로 진행
//2. force-dynamic : 해당 컴포넌트 페이지를 동적 페이지로 강제
// 3. froce-dynamic : 해당 컴포넌트 페이지를 정적 페이지로 강제
//4. error : 만약 특정 컴포넌트 페이지의 옵션을 강제 했을 때, 에러가 발생한다면, 해당 에러를 출력

// 리팩토링 -> 하나의 새로운 컴포넌트
const AllBooks = async () => {
  await delay(3000); // 스트리밍 컴포넌트로 느리게 가져와서 다른 것을 가져올 시간을 벌어줌
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: "force-cache", // 데이터값을 사용하겠다
      // cache: "no-store", // 데이터 캐시안에 값을 넣지 않겠다
    } // cache 값 저장
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
  await delay(1500); // 스트리밍 컴포넌트로 느리게 가져와서 다른 것을 가져올 시간을 벌어줌
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      // cache: "force-cache",
      // 강제로 캐시값에 값을 넣어라
      //랜덤으로 값을 끌어와야 하는데 강제로 캐시값을 넣어버리니 그전 값을 계속 끌어오게 된다
      next: {
        revalidate: 3, //3초가 지난 후에 새로 고침을 누르면 바뀐다
        // cache가 stale이 된다
      },
    }
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

export const dynamic = "force-dynamic";

const Home = async () => {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          <Suspense fallback={<BookListSkeleton count={3} />}>
            <RecoBooks />
          </Suspense>
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          <Suspense fallback={<BookListSkeleton count={12} />}>
            <AllBooks />
          </Suspense>
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

/*
Dynamic page 설정하는 기준 

1. 캐시되지 않은 Data.Fetching을 사용할 경우
const Comp = async () => {
  const response = await fetch ("...",{cache:"no-store"})
  retrun <div>...</div>
}

2.동적함수 (쿠키,헤더,쿼리스트링) 을 사용하는 컴포넌트가 존재할 때
import {cookies} from "next/headers"

const Comp = async () => {
const cookieStore = cookies() 
const theme = cookeStore.get("theme")

return <div>...</div>
}

동적함수 : 0, 데이터 캐시: X => Dynamic Page
동적함수 : 0, 데이터 캐시: 0 => Dynamic Page
동적함수 : x, 데이터 캐시: x => Dynamic Page
동적함수 : x, 데이터 캐시: 0 => Static Page (완전 반대 ) (Full Route Cache 기능 사용 적합)
*/
