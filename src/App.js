import React from "react";
import "./App.css";
import Main from "./Page/Main";
import Section from "./Page/Section";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <Modal />

      <Main />
      <Section />
    </>
  );
};

export default App;
