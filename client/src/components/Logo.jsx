import React from "react";
import styled from "styled-components";

import LogoImg from '../image/virstory_logo.svg';

export default function Logo() {
  return(
  <LogoWrap>
    <LogoImgSize src={LogoImg}></LogoImgSize>
    <LogoStyle>
      VIR:Story
    </LogoStyle>
  </LogoWrap>
  );
}
const LogoWrap = styled.div `
  margin-bottom:100px;
  display:flex;
  flex-flow:column;
  align-items: center;
`;
const LogoStyle = styled.h1`
  margin-bottom:0;
  font-size: 72px;
  color: #c0392b !important;
`
const LogoImgSize = styled.img`
  width:160px;
  display:block;
`