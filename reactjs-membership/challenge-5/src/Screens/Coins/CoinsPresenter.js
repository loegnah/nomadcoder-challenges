import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const RankStyle = styled.b`
  font-weight: 600;
`;

const CoinsPresenter = ({ data, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data && data.length > 0 && (
        <Section>
          {data.map((coin) => (
            <span key={coin.id}>
              <RankStyle>#{coin.rank}</RankStyle> {coin.name}/{coin.symbol}
            </span>
          ))}
        </Section>
      )}
    </Container>
  );

CoinsPresenter.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CoinsPresenter;
