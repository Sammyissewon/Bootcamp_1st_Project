import React from "react";
import { BrowserRouter as Route, Routes, Router } from "react-router-dom";
import Header from "./components/sm/Header";
import Main from "./Page/Main";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import Section from "./Page/Section";
import Footer from "./components/sm/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        {/* 꼭 Router 안에 선언해줘야함 */}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/Section" element={<Section />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
