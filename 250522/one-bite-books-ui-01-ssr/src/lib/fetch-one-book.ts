import { BookData } from "@/types";

const fetchOneBook = async (id: number): Promise<BookData | null> => {
  const url = `https://onebite-books-server-main-class.vercel.app/book/${id}`;

  // if (q) {
  //   url += `/search?q=${q}`; //q가 있을 땐 q 값을 반환하고 없을 때 그냥 url 값을 반환한다!!
  // }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};
export default fetchOneBook;
