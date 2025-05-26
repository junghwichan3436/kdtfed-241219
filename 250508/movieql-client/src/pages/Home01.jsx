import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";

const Home = () => {
  const [movies, SetMoives] = useState([]);
  const client = useApolloClient(); //인스턴스화 시켜준다
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              id
              title
            }
          }
        `,
      })
      .then((results) => SetMoives(results.data.allMovies));
  }, [client]); //변수의 값이 변경되면 리랜더링이 된다
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
};

export default Home;
