import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-book";
import Head from "next/head";

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
    <>
      <Head>
        <title>한입북스</title>
        <meta property="or:imgae" content="/thumbnail.png" />
        <meta property="op:title" content="한입북스-검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
//쿼리값을 찾아온다

// search라는 폴더안에 컴포넌트를 만들땐 항상 index.tsx
//쿼리값을 찾아올 땐 useRouter
