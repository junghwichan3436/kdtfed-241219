"use server";
import delay from "@/util/delay";
import { revalidatePath, revalidateTag } from "next/cache";
//서버액션을 실행할 함수다 라고 알려준다
// (초기값, 바꿀값)으로 인자값을 바꾸어줘야 에러가나지 않는다
export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString;
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !author || !content) {
    return;
    status: false;
    error: "리뷰 내용과 작성자를 입력해주세요!";
  }

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    ); //process환경변수의 값을 찾아온다
    console.log(response.status);
    //1. 특정 주소와 해당하는 페이지만 재검증
    //revalidatePath(`/book/${bookId}`); //안에들어간 인자값을 알아서 새검증 해준다

    //2. 즉정 경로의 모든 페이지를 재검증
    //revalidatePath(`/book/[id]`, "page");

    //3.특정 레이아웃을 갖는 모든 페이지 재검증
    //revalidatePath(`/(with-searchbar)`, "layout");

    // 4.모든 데이터 재검증
    //revalidatePath("/", "layout");

    //5. 특정 태그 기준, 데이터 캐시 재검증
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: true,
      error: `리뷰 저장에 실패하였습니다`,
    };
  }
};
