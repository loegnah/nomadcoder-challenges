import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const PricesPresenter = ({ data, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data && data.length > 0 && (
        <Section>
          {data.map((coin) => (
            <span key={coin.id}>
              {coin.name} / {coin.symbol}: ${coin.quotes.USD.price}
            </span>
          ))}
        </Section>
      )}
    </Container>
  );

PricesPresenter.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default PricesPresenter;
