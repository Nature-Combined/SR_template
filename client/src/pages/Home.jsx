import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import LeftBtn from "../image/left.svg";
import RightBtn from "../image/right.svg";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/700/300/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/700/300/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/700/300/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/700/300/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/700/300/?random" alt="1" />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          <img src="https://picsum.photos/700/300/?random" alt="1" />
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
          <Carousel
            slides={slides}
            showNavigation={false}
            offsetRadius={2}
            goToSlide={slideIdx}
          />
        </CarouselBox>
        <SlideLeftBtn
          onClick={() => {
            if (slideIdx - 1 >= 0) {
              setSlideIdx(slideIdx - 1);
            } else {
              setSlideIdx(slides.length - 1);
            }
          }}
        >
          <img src={LeftBtn} alt=""></img>
        </SlideLeftBtn>
        <SlideRightBtn
          onClick={() => {
            if (slideIdx + 1 < slides.length) {
              setSlideIdx(slideIdx + 1);
            } else {
              setSlideIdx(0);
            }
          }}
        >
          <img src={RightBtn} alt=""></img>
        </SlideRightBtn>
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
          <Link to="">
            <img src={"https://picsum.photos/600/200/?random"} alt={""}></img>
          </Link>
          <Link to="">
            <img src={"https://picsum.photos/600/200/?random"} alt={""}></img>
          </Link>
          <Link to="">
            <img src={"https://picsum.photos/600/200/?random"} alt={""}></img>
          </Link>
          <Link to="">
            <img src={"https://picsum.photos/600/200/?random"} alt={""}></img>
          </Link>
        </SuggestionVideoView>
      </SuggestionVideo>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-left: 320px;
  padding-top: 30px;
  padding-left: 30px;
  height: calc(100vh - 80px);
  background-color: #222222;
  color: #efefef;
  font-family: "Noto Sans KR", sans-serif;

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
    padding-left: 0;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 576px) {
  }
`;
const MainWrap = styled.div`
  height: 100%;
`;
const RealTimeVideo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 50%;
  position: relative;
  margin: 0 6%;
`;
const RealTimeVideoHead = styled.div`
  margin-bottom: 30px;
`;

const CarouselBox = styled.div`
  width: 50%;
  height: 60%;
  margin: 0 auto;
  img {
    object-fit: scale-down;
  }
`;
const SlideLeftBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  height: 15%;
  cursor: pointer;
  z-index: 1;
  img {
    height: 100%;
    filter: invert(100%) sepia(1%) saturate(82%) hue-rotate(248deg)
      brightness(116%) contrast(87%);
    transition: all 0.2s;
  }
  img:hover {
    filter: invert(29%) sepia(36%) saturate(3560%) hue-rotate(343deg)
      brightness(87%) contrast(88%);
  }
`;
const SlideRightBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 8%;
  height: 15%;
  cursor: pointer;
  z-index: 1;
  img {
    height: 100%;
    filter: invert(100%) sepia(1%) saturate(82%) hue-rotate(248deg)
      brightness(116%) contrast(87%);
    transition: all 0.2s;
  }
  img:hover {
    filter: invert(29%) sepia(36%) saturate(3560%) hue-rotate(343deg)
      brightness(87%) contrast(88%);
  }
`;
const VideoBox = styled.div`
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  img {
    box-shadow: ${({ theme }) => theme.boxShadow.box};
  }
`;

const SuggestionVideoChange = styled.div`
  margin-right: 40px;
`;
const SuggestionChangeBtn = styled.button`
  margin: 0 !important;
  padding: 0 30px;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: bold;
  background-color: transparent;
  color: #efefef;
  border: none;
  transition: all 0.3s;
  outline: none;
  :hover {
    color: #c0392b;
  }
`;
const H2 = styled.h3`
  font-size: 30px;
  padding-left: 4%;
  /* font-family: "Nanum Gothic Coding", monospace; */
  /* font-family: "Do Hyeon", sans-serif; */
`;
const SuggestionVideo = styled.div`
  height: 40%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 6%;
`;
const SuggestionVideoHead = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SuggestionVideoView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  overflow: hidden;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 80%;
  }

  img {
    text-align: center;
    width: 70%;
    height: 100%;
    object-fit: cover;
    display: inline-block;
    border-radius: 3px;
    transition: all 0.3s;
    box-shadow: ${({ theme }) => theme.boxShadow.box};
    :hover {
      transform: scale(1.05);
    }
  }
`;
