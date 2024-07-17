import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/sm/Header";
import Main from "./Page/Main";
import NewsDetail from "./Components/NewsDetail/NewsDetail";
import Section from "./Page/Section";
import Subscribe from "./Components/hb/Subscribe";
import SignupForm from "./Components/hb/SignupForm";
import Modal from "./Components/sm/Modal";
import Footer from "./Components/sm/Footer";

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
        <Route path="/SignupForm" element={<SignupForm />} />
        {/* <Route path="/Modal" element={<Modal />} /> */}
      </Routes>
      <Footer />
      <Modal />
    </BrowserRouter>
  );
};

export default App;
