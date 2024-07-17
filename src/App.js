import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/sm/Header";
import Main from "./Page/Main";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import Section from "./Page/Section";
import Subscribe from "./components/hb/Subscribe";
import Footer from "./components/sm/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* 꼭 Router 안에 선언해줘야함 */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/Section" element={<Section />} />
        <Route path="/Subscribe" element={<Subscribe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
