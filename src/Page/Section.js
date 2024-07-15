import React from "react";

// components
import Item from "../Components/Item";
import Pagination from "../Components/Pagination";

const items = Array.from({ length: 20 }); // 16개의 항목 생성

const Section = () => {
  return (
    <>
      <div className="section-header">
        <h4 className="section-title">온라인 쇼핑몰</h4>
        <div className="section-text">
          유용한 팁을 활용하여 온라인 쇼핑몰의 판매 전략을 개선하고, 매출을
          늘리세요.
        </div>
      </div>

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
