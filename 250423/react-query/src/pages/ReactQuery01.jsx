import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePostQuery } from "../usePost";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ReactQuery = () => {
  // const { data, isLoading, error, isError, refetch } = useQuery({
  //   // error는 어떤 에러인지 알려주고 isError는 Boolean한 값인지 알려준다
  //   queryKey: ["post", 1], //post라는 이름을 가진 api 키를 가져오기 위해 post라 지음
  //   queryFn: (queryData) => {
  //     const id = queryData.queryKey[1];
  //     return axios.get(`http://localhost:3000/posts/${id}`);
  //   }, //redux에서 action dispatch reducer store middleware 이런걸 6줄로 끝내버렸다
  //   retry: 1, //axios를 활용한 호출 시도를 몇번 할  거냐?
  //   select: (data) => {
  //     //어떠한 값만 반환할건지를 알려준다 select
  //     return data.data; //data안에 data만 찾아온다
  //   },
  //   gcTime: 20000, //캐시값이 계속 남아있으면 개인정보누출 또는 컴퓨터속도느려짐 이라는 메모리누수가 발생할 수 있기 때문에 유효기간을 준다!!!!!!!

  //   // stale단계로 진입하기 전까 지의 시간을 정의한다
  //   staleTime: 10000, //10의 시간 뒤에
  //   // gcTime은 staleTime보단 길어야한다
  //   // refetchInterval: 3000, //3초마다 새로 업데이트된 값을 찾아온다
  //   // refetchOnMount: false, // 컴포넌트가 마운트가 된시점에 리팻칭 할거냐 (다른데 왔다 다시왔을때 다시 데이터를 불러올거냐)
  //   // refetchOnWindowFocus: true, //다른 사이트에 갔다가 왔을 때 최신데이터를 불러 올 수 있게 하는 것
  //   enabled: false, //최초에는 컴포넌트를 찾아오지 않는다 최초에는 호출을 하지 않는다  (이벤트를 하지 않았을 때는 호출 되지 않게한다)
  //   //검색하는 순간에만 api를 끌고 온다 이런거
  // });
  const { data, isLoading, error, isError, refetch } = useQuery();
  console.log(data);
  if (isLoading) {
    return <h1>Loding...</h1>;
  } //로딩일 때
  if (isError) {
    return <h1>{error.message}</h1>;
  } //에러 일때
  return (
    //둘다 아닐때
    <Container>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button onClick={refetch}>Posts 리스트 새로고침</button>
      {/* refetch 다시 수동으로 재호출을 하려고할 때 사용 */}
    </Container>
  );
};

export default ReactQuery;

// ReactQuery는 에러에 대해 정확히  알려주고 3번의 시도를 해본다

// use로 시작한는 것은 무조건 컴포넌트에서만 쓸 수 있다 그래서 함수안에서 쓰기 위해 커스텀함수를 만든다
