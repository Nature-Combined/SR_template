import React from "react";
import styled from "styled-components";
import LogoImg from '../image/virstory_logo.svg';

export default function MyPageTest() {
  return(
      <>
    <MyPageWrap>
        <MyPageShow>
          <div>
            <h2>마이페이지</h2>

          </div>
        </MyPageShow>
    </MyPageWrap>
    </>
  );
}

const MyPageWrap = styled.div `
    position: relative;
    width:100%;
    height: 645px;
    
`
const MyPageShow = styled.div `
    position:absolute;
    top:100px;
    right:0;
    height:100%;
    width: 80%;
    color:#efefef;
    background-color: #000;
`
