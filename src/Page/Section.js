import React from "react";
import classes from "./Section.module.css";
import { useState } from "react";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/sw/Pagination";

const Section = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <MainItemList className={classes.mainItemList} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <div className={classes.sectionBottomText}>
        본 블로그는 <span className={classes.customBold}>Wix Blog</span>로
        제작되었습니다.
      </div>
    </>
  );
};

export default Section;
