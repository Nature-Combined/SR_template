import React from "react";
import styled from "styled-components";
export default function Modal({ setModalOnOff }) {
  return (
    <Container onClick={() => setModalOnOff((pre) => !pre)}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
        <div>dsfad</div>
      </ModalBox>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: gray;
  opacity: 0.5;
  z-index: 100;
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 50vw;
  height: 80vh;
  transform: translate(-50%, -50%);
  background-color: #efefef;
  overflow-y: scroll;
`;
