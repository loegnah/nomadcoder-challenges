import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    padding: 7px 5vw;
  }
`;

export default GlobalStyles;