import React from "react";
import styles from "./Section.module.css";
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
      <MainItemList className={styles.mainItemList} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className={styles.sectionBottomText}>
        <p>
          본 블로그는 <span className={styles.customBold}>Wix Blog</span>로
          제작되었습니다.
        </p>
      </div>
    </>
  );
};

export default Section;
