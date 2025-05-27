import React from "react";
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";
export const getStaticPaths = () => {
  return {
    paths: [
      //어짜피 우리가 ssg로 사전랜드링을 할 때 필요할 것같은 파라미터값을 특정 몇개 값을 미리지정 (여러개니까 배열로) 1,2,3번을 오류를 내지 않고 보여주겠다
      { params: { id: "1" } }, // 문자형태로 주어야한다
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // fallback: "blocking",
    fallback: true,
    // fallback: false, //boolean값으로 받을 수 있고 위에서 정의하지않는 값을 받으면 false를 준다
    //fallback의 옵션 3가지 : false(*존재하지 않는 페이지 없음) &blocking(* 최초에는 없는 페이지로 간주하난, 즉시 SSR방식으로 변화해서 해당 페이지를 생성) & true (*즉시생성 + 페이지만 미리 반환 + )
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const book = await fetchOneBook(Number(id));
  if (!book) {
    return {
      notFound: true, //사용자가 요청하는 페이지가 존재하지않는 다면 404컴포넌트 페이지를 반환해라
    };
  }

  return {
    props: { book },
  };
};

const Book = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) return " 로딩중입니다...";
  if (!book) return "문제가 발생했습니다. 다시 시도하세요!";
  //유니온 타입의 문제가 생겼을 때 타입 단언 , 타입 가드를 써준다
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
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
