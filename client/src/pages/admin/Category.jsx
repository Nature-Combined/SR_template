import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Category() {
  const [category, setCategory] = useState("");
  const [listOnOff, setListOnOff] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [changeCategory, setChangeCategory] = useState(null);
  const [changeCategoryName, setChangeCategoryName] = useState("");

  const handleCategory = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/category`, {
        category,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

  const handleList = () => {
    if (!listOnOff) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/admin/category`)
        .then((res) => setCategoryList(res.data.result))
        .then(() => setListOnOff(true))
        .catch((err) => console.log(err.response));
    } else {
      setListOnOff(false);
    }
  };

  const handleChangeCategory = (id) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/category/change?id=${id}`, {
        category: changeCategoryName,
      })
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/admin/category`)
          .then((res) => setCategoryList(res.data.result));
      })
      .catch((err) => console.log(err.response));
  };

  const handleDelCategory = (id) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/category/del?id=${id}`)
      .then((res) => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/admin/category`)
          .then((res) => setCategoryList(res.data.result));
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <div>카테고리 생성 삭제 변경 페이지입니다.</div>
      <div>카테고리 생성</div>
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        onKeyPress={(e) => {
          if (e.code === "Enter") handleCategory();
        }}
        placeholder="카테고리를 입력해 주세요."
      />
      <button onClick={handleCategory}>생성</button>
      <div>
        <button onClick={handleList}>카테고리 목록</button>
        {listOnOff &&
          categoryList.map((el) => (
            <>
              <CategoryListBox key={el.id}>
                <div>{el.category_name}</div>
                <button
                  onClick={() => {
                    if (el.id === changeCategory) setChangeCategory(null);
                    else setChangeCategory(el.id);
                  }}
                >
                  수정
                </button>

                <ChangeCategory isActive={changeCategory === el.id}>
                  <input
                    type="text"
                    onChange={(e) => setChangeCategoryName(e.target.value)}
                  />
                  <button onClick={() => handleChangeCategory(el.id)}>
                    확인
                  </button>
                </ChangeCategory>

                <button onClick={() => handleDelCategory(el.id)}>삭제</button>
              </CategoryListBox>
            </>
          ))}
      </div>
    </>
  );
}

const CategoryListBox = styled.div`
  display: flex;
`;

const ChangeCategory = styled.div`
  display: ${({ isActive }) => (isActive ? "inline-block" : "none")};
`;
