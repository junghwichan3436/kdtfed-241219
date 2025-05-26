import React from "react";
import styled from "styled-components";
import { usePostQuery } from "../usePost"; // 커스텀 훅
import axios from "axios";
import { useQueries } from "@tanstack/react-query"; //함번에 여러개를 가져올 때 복수형의 훅함수를 쓴다

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
  // const { data, isLoading, error, isError, refetch } = usePostQuery();
  // // 3가지 조건문 (else if문 아님)
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  const ids = [1, 2, 3, 4];
  const fetchPostDetail = (id) = {
    return axios.get(`http://localhost:3000/posts/${id}`)
  }
//객체안 에 바로 키값을 넣지않고 
  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey : ["posts", id],
        queryFn: () => fetchPostDetail(id)
      }
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data )
      }
    }
  })
  return (
    <></>
  )
  // return (
  //   <Container>
  //     {data?.map((item) => (
  //       <div key={item.id}>{item.title}</div>
  //     ))}
  //     <button onClick={refetch}>Posts 리스트 새로고침</button>
  //     {/* // 다시 수동으로 새로고침을 원할때 쓰이는것 */}
  //   </Container>
  // );
};

export default ReactQuery;

// 리액트쿼리는 총 3번의 액션시도를 해보고
// 오류가 나는 또는 실패하는 원인을 구체적으로 3번째 상태에서 구체적으로 알려준다.
// 그럼 data를 한번더 쓸 필요없다.
