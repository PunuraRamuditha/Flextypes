import { Component } from 'react';
import './App.css';
import  Navbar  from './Navbar';
import AlignItems from './Pages/AlignItems';
import FlexDirection from './Pages/FlexDirection';
import Home from './Pages/Home';
import FlexWrap from './Pages/FlexWrap';
import AlignContent from './Pages/AlignContent';
import LayoutDirection from './Pages/LayoutDirection';
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AlignItems" element={<AlignItems />} />
      <Route path="/FlexDirection" element={<FlexDirection />} />
      <Route path="/FlexWrap" element={<FlexWrap />} />
      <Route path="/LayoutDirection" element={<LayoutDirection />} />
      <Route path="/AlignContent" element={<AlignContent />} />
    </Routes>
    </>
  )
}

export default App;
