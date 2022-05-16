import React from "react";
import styled from "styled-components";
export default function TermsOfService({ setModalOnOff }) {
  return (
    <Container onClick={() => setModalOnOff((pre) => !pre)}>이용약관</Container>
  );
}

const Container = styled.button`
  margin-left: 320px;
  cursor: pointer;
`;
