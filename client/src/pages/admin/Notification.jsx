import React, { useState } from "react";
import styled from "styled-components";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
import axios from "axios";

export default function Notification() {
  const [writerBoxSwitch, setWriterBoxSwitch] = useState(false);
  const headerLine = [
    {
      item: "제  목",
      size: 5,
    },
    {
      item: "글쓴이",
      size: 2,
    },
    {
      item: "작성일",
      size: 3,
    },
  ];

  const handleAddNotice = () => {
    setWriterBoxSwitch((pre) => !pre);
  };

  return (
    <>
      <Container>
        공지사항 페이지입니다.
        <NoticeAddBtn onClick={handleAddNotice}>공지사항 등록</NoticeAddBtn>
        <ReactSummernote
          value="Default value"
          options={{
            lang: "ko-KR",
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ["style", ["style"]],
              ["font", ["bold", "underline", "clear"]],
              ["fontname", ["fontname"]],
              ["para", ["ul", "ol", "paragraph"]],
              ["table", ["table"]],
              ["insert", ["link", "picture", "video"]],
              ["view", ["fullscreen", "codeview"]],
            ],
          }}
          onChange={this.onChange}
        />
        <NoticeListBox>
          <NoticeListHeaderBox>
            {headerLine.map((el) => (
              <NoticeListHeaderItem size={el.size} key={el.item}>
                {el.item}
              </NoticeListHeaderItem>
            ))}
          </NoticeListHeaderBox>
        </NoticeListBox>
      </Container>
    </>
  );
}

const Container = styled.div``;

const NoticeAddBtn = styled.button``;

const NoticeListBox = styled.div``;

const NoticeListHeaderBox = styled.div`
  display: flex;
`;

const NoticeListHeaderItem = styled.div`
  text-align: center;
  flex: ${({ size }) => size};
`;
