import React from "react";
import style from "./[id].module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id;
  const book = await fetchOneBook(Number(id));

  return {
    props: { book },
  };
};

const Book = ({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!book) return "문제가 발생했습니다. 다시 시도하세요!";
  //유니온 타입의 문제가 생겼을 때 타입 단언 , 타입 가드를 써준다
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;
  // const {
  //   query: { id },
  // } = useRouter();
  // const router = useRouter();
  // console.log(router);

  return (
    <div>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default Book;

// [id].tsx id가 키값의 역할을 한다
//[...id].tsx = catch all segment라고 부른다 뒤쪽의 있는 동적 파라미터값을 제한하지 않겠다
//하지만 이건 파라미터값을 받지 않으면 자신스스로의 라우팅은 불가능 해진다
//[...id]  = > 자기자신의 페이지 라우팅은 불가
//[[...id]] =optional catch all segment  = > 자기자신 또는 그아래 모두 가능
