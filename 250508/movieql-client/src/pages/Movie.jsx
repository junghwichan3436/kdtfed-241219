import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754eb);
  color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const SubTitile = styled.h4`
  font-size: 3rem;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;
  padding: 10px 16px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 24px;
`;

const Image = styled.div`
  width: 100%;
  height: 700px;
  flex: 1;
  background: url(${({ bg }) => bg}) top/cover no-repeat;
  border-radius: 8px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      media_cover_image
      isLiked @client
    }
  }
`;

// isLiked @client /
//캐쉬안에서만 관리할 값이야

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const test = useQuery(GET_MOVIE);
  console.log(test);

  //클릭하게 되었을때 언라이크로 바꾼다
  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
    //cache안에 어떠한 공간을 만들어서 저장하겠다
    //클릭할때마다 캐시안에 이러한 공간을 만들어 놓겠다!!
  };
  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <Title>{data.movie.title}</Title>
          <SubTitile>{data.movie.rating}</SubTitile>
          <Button onClick={onClick}>
            {data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Image />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus facere eius consequuntur ea dolore dignissimos ad,
            perferendis iusto nulla quos ipsum odit tempora quisquam,
            accusantium inventore fuga cumque nam sit. Corporis nam natus
            perspiciatis dolor dolores. Beatae eius delectus quis ad. Molestiae
            odit molestias unde fugiat atque ab minus quod quibusdam ad sequi.
            Dolores soluta dicta omnis, laboriosam harum ad! Sequi dolores
            aliquam quo omnis consequatur! Earum dolores repellendus at dolorum
            doloremque. Assumenda voluptates nulla animi, eaque eligendi alias
            ab minima architecto perferendis obcaecati ratione! Excepturi dolore
            nobis rem ratione. Porro deserunt necessitatibus aperiam, quidem
            omnis nobis sint eius temporibus itaque voluptatum aut alias, nam
            cum voluptatem neque quod in ab eaque totam molestiae magni.
            Recusandae sed nostrum reprehenderit eaque. Ratione, ipsam! Maxime
            eaque natus iusto necessitatibus accusantium mollitia neque minima
            doloremque asperiores, hic quod fugit, quas pariatur dolores optio
            sapiente nihil fuga similique explicabo! Eum excepturi quae autem
            laboriosam. Illum dignissimos numquam magni! Reiciendis odit debitis
            mollitia blanditiis? Provident labore velit, ipsam voluptatem, totam
            architecto at voluptate temporibus sint accusamus autem ex
            necessitatibus amet est harum in iusto sapiente! Nam a ratione
            aliquam qui amet dolorum itaque corporis. Quidem, porro alias ipsum,
            doloremque quod nam dicta ipsa iure consectetur distinctio
            cupiditate accusantium temporibus magni unde voluptatum, impedit
            vero. Consectetur! Officia quo quos quibusdam dolorem voluptatibus
            nemo! Harum at et tempora quidem, temporibus eveniet, fugiat
            laudantium voluptates in consequatur quae voluptatem, inventore ipsa
            consectetur commodi accusantium animi minima. Consequuntur,
            repudiandae! Veritatis voluptatum ipsum magnam modi, cumque saepe
            dolorem accusamus iusto ipsa aspernatur dolor beatae eligendi natus
            harum quaerat laudantium. Nihil quisquam, fuga commodi consequatur
            maxime ut non beatae porro exercitationem. Dignissimos esse delectus
            corporis nostrum. Vel, ea? Error rem dolore sed earum quisquam
            aspernatur repudiandae debitis molestias culpa repellendus illo
            placeat libero, totam quis quidem. Vitae fugit ipsam temporibus
            facere.
          </Description>
        </Container>
      )}
    </>
  );
};

export default Movie;
