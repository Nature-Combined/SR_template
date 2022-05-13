import React from "react";
import styled from "styled-components";
export default function AddImage() {
  return (
    <Container>
      <ItemBox>
        <ImageBox>
          <label for="file">+</label>
          <input type="file" id="file" />
        </ImageBox>
        <DescBox>이미지를 업로드해주세요.</DescBox>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: 320px;
  margin-top: 80px;
  height: calc(100vh - 80px);
  background-color: #222222;
`;

const ItemBox = styled.div`
  /* border: 1px solid red; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30vw;
  height: 50vh;
`;

const ImageBox = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 4.5rem;
  font-weight: 550;

  & label:hover {
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }
`;

const DescBox = styled.div`
  color: #efefef;
  text-align: center;
  margin-top: 3rem;
`;
