import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./category.css"

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
    <div className="category_wrap">
      <div>
        <div className="category_title">Category</div>
        <div className="category_produce">
          <p>카테고리 생성</p>

          <input
            className="category_produce_input"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            onKeyPress={(e) => {
              if (e.code === "Enter") handleCategory();
            }}
            placeholder="카테고리를 입력해 주세요."
          />
          <button className="category_produce_btn" onClick={handleCategory}>+</button>
        </div>
      </div>
      <div className="category_list_wrap">
        <button className="category_list_show_btn" onClick={handleList}>카테고리 목록</button>
        {listOnOff &&
          categoryList.map((el) => (
            <div className="">
              <CategoryListBox key={el.id}>
                <div className="category_list_print_box">{el.category_name}</div>
                <button
                  id="listBtn"
                  className="category_list_btn"
                  onClick={() => {
                    if (el.id === changeCategory) {
                      setChangeCategory(null);
                      document.getElementById("listBtn").classList.remove("modify_show");
                    }else {
                      setChangeCategory(el.id);
                      document.getElementById("listBtn").classList.add("modify_show");
                    }
                  }}
                >
                  수정
                </button>
                <button className="category_list_btn" onClick={() => handleDelCategory(el.id)}>삭제</button>
              </CategoryListBox>

              <div className="change_category_wrap">
                <ChangeCategory isActive={changeCategory === el.id}>
                  <input
                    className="change_category_input"
                    type="text"
                    placeholder="변경할 카테고리 이름을 입력해 주세요."
                    onChange={(e) => setChangeCategoryName(e.target.value)}
                  />
                  <button className="category_list_btn" onClick={() => handleChangeCategory(el.id)}>
                    확인
                  </button>
                </ChangeCategory>
              </div>
            </div>
          ))}
      </div>
      {/* <div className="category_modify_section category_list_wrap">
        <div>
          
        </div>
      </div> */}
    </div>
  );
}

const CategoryListBox = styled.div`
  padding: 10px;
  width: 100%;
`;

const ChangeCategory = styled.div`
  display: ${({ isActive }) => (isActive ? "inline-block" : "none")};  
`;
