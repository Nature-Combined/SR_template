import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Kakao from './pages/Kakao'
import Admin from './pages/Admin'
import Mypage from './pages/Mypage'
import Subscribe from './pages/Subscribe'
import { useState } from 'react'

function App() {
  // TODO: 추후 리덕스 또는 토큰 발급 시 변경예정
  const [myInfo, setMyInfo] = useState('')
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path='/' element={<Login setMyInfo={setMyInfo} />} />
            <Route path='/kakao' element={<Kakao setMyInfo={setMyInfo} />} />
            <Route path='/admin/*' element={<Admin />} />
            <Route path='/mypage/*' element={<Mypage myInfo={myInfo} />} />
            <Route path='/subscribe/*' element={<Subscribe />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
