import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AddMyChar() {
  const navigate = useNavigate();
  return (
    <Container>
      <ItemBox>
        <ImageBox>
          <ImageLT></ImageLT>
          <ImageRT></ImageRT>
          <ImageLB></ImageLB>
          <ImageRB></ImageRB>
        </ImageBox>
        <DescBox>나만의 캐릭터를 만들어보세요</DescBox>
        <BtnBox>
          <CreateBtnLater onClick={() => navigate("/main")}>
            나중에 만들기
          </CreateBtnLater>
          <CreateBtnNow onClick={() => navigate("/main/addimage")}>
            지금 만들기
          </CreateBtnNow>
        </BtnBox>
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
  height: 80vh;
`;

const ImageBox = styled.div`
  /* border: 1px dashed black; */

  display: grid;
  height: 70%;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ImageLT = styled.div`
  background-color: white;
`;

const ImageRT = styled.div`
  background-color: gray;
`;

const ImageLB = styled.div`
  background-color: yellow;
`;

const ImageRB = styled.div`
  background-color: skyblue;
`;

const DescBox = styled.div`
  text-align: center;
  padding: 8px;
  color: #efefef;
`;

const BtnBox = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const CreateBtnLater = styled.button`
  width: 80%;
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background-color: #efefef;
`;

const CreateBtnNow = styled(CreateBtnLater)``;
