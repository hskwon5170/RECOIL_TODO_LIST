import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

body {
min-height: 100vh;
  /* background: linear-gradient(180deg, #00006f 0%, #6cffff 100%); */
  background-image: url(paper.jpg);
  background-attachment: fixed;
  color: #fff;
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

/* @media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
} */
`;
export default GlobalStyle;
