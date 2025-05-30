"use server";

import { revalidateTag } from "next/cache";

export const deleteReviewAction = async (_: any, formData: FormData) => {
  const reviewId = formData.get(".reviewId")?.toString;
  const bookId = formData.get(".bookId")?.toString;
};

try {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  revalidateTag(`review-${bookId}`);
  return {
    status: true,
    error: "",
  };
} catch (err) {
  return {
    status: false,
    error: `리뷰 삭제에 실패했습니다 : ${err}`,
  };
}

export default DeleteReviewAction;
