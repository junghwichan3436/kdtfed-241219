const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>; // 비동기로 값을 끌고 온다
}) => {
  const { q } = await searchParams;
  return <div>Search 페이지{q}</div>;
};

export default Page;

//next.js 에서는 index를 썻지만 App router 에서는 page로 쓴다
