import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-book";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    query: { q },
  } = context;
  const books = await fetchBooks(q as string); //무조건 문자만 들어올거야  = 타입 단언
  return {
    props: { books },
  };
};

const Search = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //InferGetServerSidePropsType서버사이드렌더링 방식으로 프랍스를 받아올 땐 이것밖에 없다
  // const router = useRouter();
  // const {
  //   query: { q },
  // } = router;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
//쿼리값을 찾아온다

// search라는 폴더안에 컴포넌트를 만들땐 항상 index.tsx
//쿼리값을 찾아올 땐 useRouter
