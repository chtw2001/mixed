import { createGlobalStyle } from "styled-components";

export const primaryColor = "#D07C81";
export const secondaryColor = "#79756E";
export const pointColor = "#613B3E";

export const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0;
  font-family: 'Noto Sans KR Black';
  // border: 1px solid black;
}

ul {
  list-style: none;
  padding-left: 0;
}

// @media only screen and (max-width: 359px) and (min-width:200px) {
//   .App {
//     width: 375px;
//     height: 100vh;
//     color: #FFF;
//   }
// }
// @media only screen and (min-width: 360px) {
//   .App {
//     width: 375px;
//     height: 100vh;
//     color: #FFF;
//     & > {
//       float: left;
//     }
//   }
// }
`;
