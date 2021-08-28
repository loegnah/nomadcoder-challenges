import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMovies } from "./api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  margin-bottom: 2px;
`;

const Panel = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const getData = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await getMovies(pageNum);
    if (movies) {
      setMovieData(movieData.concat(movies.map((m) => m.title)));
      setPageNum((prevPageNum) => prevPageNum + 1);
    }
  };

  useEffect(() => {
    getData(pageNum);
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={movieData.length}
        next={getData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {movieData.map((m, i) => (
          <Item>{m}</Item>
        ))}
      </InfiniteScroll>
    </Container>
  );
};
export default Panel;
