import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/config.js";

import theme from "./theme";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Kakao from "./pages/Kakao";
import Admin from "./pages/Admin";
import Mypage from "./pages/Mypage";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/kakao" element={<Kakao />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/mypage/*" element={<Mypage />} />
              <Route path="/subscribe/*" element={<Subscribe />} />
            </Routes>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
