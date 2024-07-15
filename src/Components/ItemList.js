import React from "react";
import Item from "./Item"; // Item 컴포넌트를 불러옴
import Pagination from "./Pagination";

const items = Array.from({ length: 16 }); // 16개의 항목 생성

const ItemList = () => {
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

export default ItemList;
