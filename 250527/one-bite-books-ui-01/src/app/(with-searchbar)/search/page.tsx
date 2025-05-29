import BookItem from "@/components/book-item";
import type { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";

// export const dynamic = "force-static";
// export const dynamic = "force-dynamic";
// export const dynamic = "error"; (특정페이지의 에러가 발생한다면)

const SearchResult = async ({ q }: { q: string }) => {
  //q라는 값이 들어오면 문자열일거야 라는 타입정의
  // const { q } = await searchParams;
  await delay(1500); // 1.5초 뒤에 실행해라 호출이니까 여기서 값을 준다
  const response = await fetch(
    `${process.env.Next_PUBLIC_API_SERVER_URL}/book/search?q=${q}`
  );
  if (!response.ok) {
    return <div>오류가 발생하였습니다!</div>;
  }
  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

//컴포넌트 스타일을 정의한 것
const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>; // 비동기로 값을 끌고 온다
}) => {
  return (
    <Suspense
      key={(await searchParams).q || ""} // 각각 쿼리에 맞춰서 키 값을 부여했다
      fallback={<div>Loading....</div>} // 쿼리 값이 바뀔 때마다 다시 로딩을 찾아온다
    >
      <SearchResult q={(await searchParams).q || ""} />
    </Suspense>
  );
};

export default Page;

//next.js 에서는 index를 썻지만 App router 에서는 page로 쓴다
