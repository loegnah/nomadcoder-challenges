import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Description = styled.div``;
const Url = styled.a`
  text-decoration: underline;
`;

// code so dirty sorry
const ExchangesPresenter = ({ data, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {data && data.length > 0 && (
        <Section>
          <ItemContainer>
            {data.map((info) => (
              <Item key={info.id}>
                <Title>{info.name}</Title>
                {info.description && (
                  <Description>
                    {info.description.length <= 100
                      ? info.description
                      : info.description.slice(0, 100) + "..."}
                  </Description>
                )}
                {info.links &&
                  info.links.website &&
                  info.links.website.length > 0 && (
                    <Url href={info.links.website[0]}>
                      {info.links.website[0]}
                    </Url>
                  )}
              </Item>
            ))}
          </ItemContainer>
        </Section>
      )}
    </Container>
  );

ExchangesPresenter.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ExchangesPresenter;
