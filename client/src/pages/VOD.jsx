import React from "react";
import styled from "styled-components";

export default function VOD() {
  return (
    <Container className="App">
      <header className="App-header">
        <video controls muted>
          <source
            src={`${process.env.REACT_APP_API_URL}/video`}
            type="video/mp4"
          ></source>
        </video>
      </header>
    </Container>
  );
}

const Container = styled.div`
  margin: 100px 0 0 100px;
`;
