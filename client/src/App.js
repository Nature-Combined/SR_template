import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Kakao from "./pages/Kakao";
import Admin from "./pages/Admin"

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/kakao" element={<Kakao />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
