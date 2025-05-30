import { notFound } from "next/navigation";
import style from "./page.module.css";
import type { ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";
// import Image from "next/image";

// export const dynamic = "force-dynamic"; //강제로 동적인 페이지를 만든다

const Booktail = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    {
      next: {
        tags: [`review-${bookId}`],
      },
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생하였습니다...</div>;
  }

  const book = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        {/* <Image src={coverImgUrl} alt={title} /> */}
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};

const ReviewList = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        tags: [`review-${bookId}`],
      },
    }
    // {
    //   cache: "force-cache",
    // }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
};

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}; //dynamic한 페이지였는데 static한 페이지로 만들었다 generateStaticParams를 써서

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // const { id } = await params;
  return (
    <div className={style.container}>
      {/* <Booktail bookId={id} /> */}
      <Booktail bookId={(await params).id} />
      <ReviewEditor bookId={(await params).id} />
      <ReviewList bookId={(await params).id} />
    </div>
  );
};

export default Page;

// 이렇게 해당 명시적인 방향(목적)의 폴더를 만들고
// 동적파라미터값을 부여하기 위해 옵셔널 세그먼트로 [id] 폴더를 만들고 그안에 page를 부여함
// 그럼 전체적으로 book/1 옵셔널 값으로 이동하게 된다.
// book [id] page 에서 [id]를 부여하여 해당 페이지의 id값을 props 로 찾아와서 대입해야 한다.

//* 캐치올 세그먼트 -> 파라미터값 뒤에 동적파라미터를 추가 할수 있다.
// [...id] - 배열형태로 쭉 제한없이 나열되게 된다.
// [{id[0]}] 이런식으로 인덱스의 번호값 만큼 해당 숫자를 불러올 수 있다.
// 정작 본인페이지 book를 불러오지 못한다.

// **캐치올 옵셔널 세그먼트로
// 본인페이지도 불러올수 있게 만들어줘야한다.

// 페이지라우팅 방법 book 폴더 안에 [id] 폴더 안에 page.tsx
// [id]
//catchall segment [...id] 뒤에 연결열결되는 파라미터 값을 가져온다 하지만 자기 자신을 가져오진 못한다 예를 들어 localhost:3000/book같은 경우
//opthional catchall segment [[...id]] 자기자신도 찾아온다
