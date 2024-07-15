import React from "react";

// components
import Item from "../Components/Item"; // Item 컴포넌트를 불러옴

const items = Array.from({ length: 20 }); // 16개의 항목 생성

const MainItemList = () => {
  return (
    <>
      <div className="MainItemList">
        <div className="grid-container">
          {items.map((_, index) => (
            <Item key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainItemList;
