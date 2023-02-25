import React from "react";
import titleLogo from "../../assets/images/titleLogo.png";
import styled from "styled-components";
import {
  primaryColor,
  pointColor,
  secondaryColor,
} from "../../styles/GlobalStyle";

const Head = styled.header`
  margin: 5rem auto;
  width: 80%;
  background-color: white;
  border-bottom: #cb7980 2px solid;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const TitleWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 0.8rem;
  font-family: "Noto Sans KR Bold";
  font-weight: 500;
  color: ${pointColor};
`;

const TitleLogo = styled.img`
  width: 30px;
  height: 30px;
`;
const TitleName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${secondaryColor};
`;

const TitleSpan = styled.span`
  color: ${secondaryColor};
  font-size: 0.6rem;
  font-weight: 500;
`;

export default function Header({ user }) {
  return (
    <Head>
      <TitleLogo src={titleLogo} alt="error" />
      <TitleWrap>
        <TitleName>{user}</TitleName>
        <TitleSpan> 님 페이지입니다</TitleSpan>
      </TitleWrap>
    </Head>
  );
}
