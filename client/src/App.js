import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { light, dark } from "./theme";
// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Kakao from "./pages/Kakao";
// import Admin from "./pages/Admin";
// import Mypage from "./pages/mypage/Mypage";
import Subscribe from "./pages/Subscribe";
// import VOD from "./pages/VOD";
import { useState } from "react";
import Main from "./pages/Main";
import Error from "./pages/Error";

// import MyPageTest from "./components/MyPageTest";

import { useSelector } from "react-redux";

function App() {
  // TODO: 추후 리덕스 또는 토큰 발급 시 변경예정
  const [myInfo, setMyInfo] = useState("");
  const persist = useSelector((state) => state.persist);

  const colorTheme = {
    light,
    dark,
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={colorTheme[persist.color.mode]}>
          <GlobalStyle />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            {persist.kakao.user_info !== null ? (
              <Route path="/main/*" element={<Main />} />
            ) : null}
            <Route path="/kakao" element={<Kakao setMyInfo={setMyInfo} />} />
            {/* <Route path="/admin/*" element={<Admin />} />
            <Route path="/mypage/*" element={<Mypage myInfo={myInfo} />} />
            <Route path="/vod" element={<VOD />} />
            <Route path="/mypagetest/*" element={<MyPageTest />} /> */}
            <Route
              path="/subscribe/*"
              element={<Subscribe myInfo={myInfo} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
