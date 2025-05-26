import { BookData } from "@/types";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`; //q가 있을 땐 q 값을 반환하고 없을 때 그냥 url 값을 반환한다!!
  }

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default fetchBooks;
