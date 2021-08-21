import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = ({ children }) => (
  <Container>
    <Item>{children}</Item>
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
