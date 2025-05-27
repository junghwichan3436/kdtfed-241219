const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  console.log(params);

  const { id } = await params;
  return <div>book {id} page</div>;
};

export default Page;

// 페이지라우팅 방법 book 폴더 안에 [id] 폴더 안에 page.tsx
// [id]
//catchall segment [...id] 뒤에 연결열결되는 파라미터 값을 가져온다 하지만 자기 자신을 가져오진 못한다 예를 들어 localhost:3000/book같은 경우
//opthional catchall segment [[...id]] 자기자신도 찾아온다
