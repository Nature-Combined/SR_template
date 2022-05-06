import React from 'react'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom";
import AppLayout from '../components/AppLayout';
import Blank from './Blank';
import Notification from './admin/Notification';

function Admin() {
  return (
    <Container>
      {/* TODO: path 변경 */}
       <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Notification />} />
            <Route path="/menu2" element={<Blank />} />
            <Route path="/menu3" element={<Blank />} />
            <Route path="/menu4" element={<Blank />} />
            <Route path="/menu5" element={<Blank />} />
          </Route>
        </Routes>
    </Container>
  )
}

export default Admin

const Container = styled.div`
  margin-top: 5vh;
`