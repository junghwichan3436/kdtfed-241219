"use client";

import { createReviewAction } from "@/actions/create-reveiw-actions";
import { useActionState, useEffect } from "react";
import style from "./review-editor.module.css";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction, // (초기값, 바꿀값)으로 인자값을 바꾸어줘야 에러가나지 않는다
    null
  );
  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);
  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰내용"
          required
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
            required
          />
          <input
            disabled={isPending}
            type="submit"
            value={isPending ? "..." : "작성하기"}
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
