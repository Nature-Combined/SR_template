import React from "react";
import styled from "styled-components";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const slides = [
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/600/200/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/600/200/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/600/200/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/600/200/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/600/200/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/600/200/?random" alt="1" />
        </VideoBox>
      ),
    },
  ];

  return (
    <Container>
      홈페이지
      <CarouselBox>
        <Carousel slides={slides} showNavigation={true} offsetRadius={2} />
      </CarouselBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: 320px;
  margin-top: 80px;
  height: calc(100vh - 80px);
  background-color: #222222;
  color: #efefef;
`;

const VideoBox = styled.div`
  border: 2px solid red;
`;

const CarouselBox = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  img {
    object-fit: contain;
  }
`;
