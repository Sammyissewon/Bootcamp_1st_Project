import React from "react";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/Pagination";

const Section = () => {
  return (
    <>
      <MainItemList className="main-item-list" />
      <Pagination />
    </>
  );
};

export default Section;
