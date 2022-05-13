import React from "react";
import styled from "styled-components";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

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
      <RealTimeVideo>
        <RealTimeVideoHead>
        <H2>실시간 인기 영상</H2>
        </RealTimeVideoHead>
        <CarouselBox>
          <Carousel slides={slides} showNavigation={true} offsetRadius={2} />
        </CarouselBox>
      </RealTimeVideo>
      <SuggestionVideo>
        <SuggestionVideoHead>
          <H2>추천 영상</H2>
          <SuggestionVideoChange>
          <SuggestionChangeBtn>#VG</SuggestionChangeBtn>
          <SuggestionChangeBtn>#FT</SuggestionChangeBtn>
          </SuggestionVideoChange>
        </SuggestionVideoHead>
        <SuggestionVideoView>
          <Link to=""><img src={"https://picsum.photos/600/200/?random"} alt={""}></img></Link>
          <Link to=""><img src={"https://picsum.photos/600/200/?random"} alt={""}></img></Link>
          <Link to=""><img src={"https://picsum.photos/600/200/?random"} alt={""}></img></Link>
          <Link to=""><img src={"https://picsum.photos/600/200/?random"} alt={""}></img></Link>
        </SuggestionVideoView>
      </SuggestionVideo>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: 320px;
  padding-top: 90px;
  height: calc(100vh - 80px);
  background-color: #222222;
  color: #efefef;
`
const RealTimeVideo = styled.div`
  margin: 0 0 50px 30px;

`
const RealTimeVideoHead = styled.div`
  margin-bottom: 50px;
`
const SuggestionVideoChange = styled.div`
  margin-right: 40px;
`
const SuggestionChangeBtn = styled.button`
  padding: 30px;
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: bold;
  background-color: transparent;
  color:#efefef;
  border:none;
  transition: all 0.3s;
  outline: none;
  :hover {
    color:#c0392b;
  }
`
const H2 = styled.h3`
  font-size: 26px;
  height: 100%;
`
const SuggestionVideo = styled.div`
margin: 0 30px;
`
const SuggestionVideoHead = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const SuggestionVideoView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 100%;
  height:300px;
  overflow: hidden;
  
  
  img {
    display: inline-block;
    width: 200px;
    height: 270px;
    margin: 0 50px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all 0.3s;
    :hover {
    transform: scale( 1.05 );
    }
  }
`
const VideoBox = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const CarouselBox = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  img {
    object-fit: contain;
  }
`;