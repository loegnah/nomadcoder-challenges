import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 40px;
`;

const List = styled.ul`
  display: flex;
  height: 100px;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  height: 50px;
  margin-right: 20px;
  align-items: center;
  font-size: 15pt;
`;

const SLink = styled(Link)`
  &:hover {
    background-color: #f2d675;
  }
`;


export default withRouter(({ location: { pathname }}) => (
  <Header>
    <Title>Coin Explorer</Title>
    <List>
      <Item>
        <SLink to="/">PRICES</SLink>
      </Item>
      <Item>
        <SLink to="/exchanges">EXCHANGES</SLink>
      </Item>
      <Item>
        <SLink to="/coins">COINS</SLink>
      </Item>
    </List>
  </Header>
));
