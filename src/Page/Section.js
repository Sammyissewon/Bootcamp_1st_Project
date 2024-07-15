import React from "react";
import Item from "../Components/Item";
import Pagination from "../Components/Pagination";

const items = Array.from({ length: 20 }); // 16개의 항목 생성

const Section = () => {
  return (
    <>
      <div className="grid-container">
        {items.map((_, index) => (
          <Item key={index} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default Section;
