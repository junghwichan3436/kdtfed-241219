import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

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
