import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import LeftBtn from "../image/left.svg";
import RightBtn from "../image/right.svg";

import ReactPlayer from "react-player";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          {/* <img src="https://picsum.photos/700/300/?random" alt="1" /> */}
          <ReactPlayer
            url={`${process.env.REACT_APP_API_URL}/assets/1.mp4`}
            light={`https://picsum.photos/700/300/?random`}
            playing={true}
            muted={true}
            controls={true}
            width="700px"
            height="300px"
          />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          {/* <img src="https://picsum.photos/700/300/?random" alt="1" /> */}
          <ReactPlayer
            url={`${process.env.REACT_APP_API_URL}/assets/2.mp4`}
            light={"https://picsum.photos/700/300/?random"}
            playing={true}
            muted={true}
            controls={true}
            width="700px"
            height="300px"
          />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          {/* <img src="https://picsum.photos/700/300/?random" alt="1" /> */}
          <ReactPlayer
            url={`${process.env.REACT_APP_API_URL}/assets/2.mp4`}
            light={"https://picsum.photos/700/300/?random"}
            playing={true}
            muted={true}
            controls={true}
            width="700px"
            height="300px"
          />
        </VideoBox>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <VideoBox>
          {/* <img src="https://picsum.photos/700/300/?random" alt="1" /> */}
          <ReactPlayer
            url={`${process.env.REACT_APP_API_URL}/assets/2.mp4`}
            light={"https://picsum.photos/700/300/?random"}
            playing={true}
            muted={true}
            controls={true}
            width="700px"
            height="300px"
          />
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
          <BsCaretLeftFill></BsCaretLeftFill>
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
          <BsFillCaretRightFill></BsFillCaretRightFill>
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
            <img src={"https://picsum.photos/700/300/?random"} alt={""}></img>
          </Link>
          <Link to="">
            <img src={"https://picsum.photos/700/300/?random"} alt={""}></img>
          </Link>
          <Link to="">
            <img src={"https://picsum.photos/700/300/?random"} alt={""}></img>
          </Link>
          <Link to="">
            <img src={"https://picsum.photos/700/300/?random"} alt={""}></img>
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
    padding: 0;
  }
`;
const RealTimeVideo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  // TODO:
  /* align-items: center; */
  height: 50%;
  position: relative;
  margin: 0 6%;
  @media only screen and (max-width: 992px) {
    margin: 0 3%;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 2%;
  }
  @media only screen and (max-width: 576px) {
    margin: 0 0%;
  }
`;
const RealTimeVideoHead = styled.div`
  margin-bottom: 30px;
  text-align: start;
`;

const CarouselBox = styled.div`
  width: 40%;
  height: 60%;
  margin: 0 auto;
  img {
    max-width: 800px;
    object-fit: contain;
  }

  @media only screen and (max-width: 992px) {
    width: 40%;
    img {
      max-width: 650px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 10%;
    img {
      max-width: 580px;
    }
    @media only screen and (max-width: 576px) {
      width: 0;
      img {
        max-width: 440px;
      }
    }
  }
`;
const SlideLeftBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  height: 15%;
  cursor: pointer;
  z-index: 1;
  svg {
    font-size: 60px;
    color: ${({ theme }) => theme.color.basicText};
    height: 100%;
    transition: all 0.2s;
  }
  svg:hover {
    color: ${({ theme }) => theme.color.pointColor};
  }
  @media only screen and (max-width: 992px) {
    left: -1%;
  }
  @media only screen and (max-width: 768px) {
    left: 0%;
  }
  @media only screen and (max-width: 576px) {
    left: 0%;
  }
`;

const SlideRightBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 8%;
  height: 15%;
  cursor: pointer;
  z-index: 1;
  svg {
    font-size: 60px;
    color: ${({ theme }) => theme.color.basicText};
    height: 100%;
    transition: all 0.2s;
  }
  svg:hover {
    color: ${({ theme }) => theme.color.pointColor};
  }
  @media only screen and (max-width: 992px) {
    right: -1%;
  }
  @media only screen and (max-width: 768px) {
    right: 0%;
  }
  @media only screen and (max-width: 576px) {
    right: 0%;
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
  color: ${({ theme }) => theme.color.basicText};
  border: none;
  transition: all 0.3s;
  :hover {
    color: ${({ theme }) => theme.color.pointColor};
  }
  :focus {
    outline: none;
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
  @media only screen and (max-width: 992px) {
    margin: 0 3%;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 2%;
  }
  @media only screen and (max-width: 576px) {
    margin: 0 0%;
  }
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
    @media only screen and (max-width: 992px) {
      width: 87%;
    }
  }
`;
