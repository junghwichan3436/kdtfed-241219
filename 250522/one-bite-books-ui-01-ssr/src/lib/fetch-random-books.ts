import { BookData } from "@/types";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = `https://onebite-books-server-main-class.vercel.app/book/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default fetchRandomBooks;
