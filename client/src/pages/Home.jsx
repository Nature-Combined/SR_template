import React from "react";
import styled from "styled-components";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import LeftBtn from '../image/left.svg';
import RightBtn from '../image/right.svg';

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
          <Carousel slides={slides} showNavigation={false} offsetRadius={2} />
        </CarouselBox>
        <SlideLeftBtn><img src={LeftBtn}></img></SlideLeftBtn>
        <SlideRightBtn><img src={RightBtn}></img></SlideRightBtn>
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
  padding-top: 70px;
  padding-left: 30px;
  height: calc(100vh - 80px);
  background-color: #222222;
  color: #efefef;
`
const RealTimeVideo = styled.div`
  position: relative;
  margin: 0 0 70px 30px;

`
const RealTimeVideoHead = styled.div`
  margin-bottom: 50px;
`

const CarouselBox = styled.div`
  width: 700px;
  height: 200px;
  margin: 0 auto;
  img {
    object-fit: contain;
  }
`
const SlideLeftBtn = styled.div`
  position: absolute;
  top: 135px;
  left: 200px;
  height: 75px;
  cursor: pointer;
  img {
    height: 100%;
    filter: invert(100%) sepia(1%) saturate(82%) hue-rotate(248deg) brightness(116%) contrast(87%);
    transition: all 0.2s;
  }
  img:hover {
    filter: invert(29%) sepia(36%) saturate(3560%) hue-rotate(343deg) brightness(87%) contrast(88%);
  }
`
const SlideRightBtn = styled.div`
  position: absolute;
  top: 135px;
  right: 200px;
  height: 75px;
  cursor: pointer;
  img {
    height: 100%;
    filter: invert(100%) sepia(1%) saturate(82%) hue-rotate(248deg) brightness(116%) contrast(87%);
    transition: all 0.2s;
  }
  img:hover {
    filter: invert(29%) sepia(36%) saturate(3560%) hue-rotate(343deg) brightness(87%) contrast(88%);
  }
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
  font-size: 20px;
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
  overflow: hidden;
  height: 300px;
  
  a {
    display: inline-block;
    width: 200px;
  margin: 0 50px;
  
  }
  
  img {
    display: flex;
    align-items: center;
  width: 100%;
  height:270px;
    object-fit: cover;
    display: inline-block;
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
