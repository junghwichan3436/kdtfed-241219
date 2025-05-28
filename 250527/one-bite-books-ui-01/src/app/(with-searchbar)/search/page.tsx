import BookItem from "@/components/book-item";
import type { BookData } from "@/types";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>; // 비동기로 값을 끌고 온다
}) => {
  const { q } = await searchParams;
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

export default Page;

//next.js 에서는 index를 썻지만 App router 에서는 page로 쓴다
