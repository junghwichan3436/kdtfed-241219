import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-book";
import { BookData } from "@/types";

const Search = () => {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const {
    query: { q },
  } = router;
  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };
  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

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
