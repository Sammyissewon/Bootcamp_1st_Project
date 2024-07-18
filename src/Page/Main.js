import React from "react";
import styles from "./Main.module.css";
import { useState } from "react";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/sw/Pagination";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={styles.upperSide}>
        <div className={styles.leftSide}>
          <h4 className={styles.mainArticle}>
            꼭 알아두어야 할 모바일 웹 디자인 사례 16가지
          </h4>
          <button className={styles.detailButton}>자세히 보기 </button>
        </div>
        <img
          src="assets/main2.png"
          className={styles.mainImg}
          alt="main img"
        ></img>
      </div>

      <MainItemList className={styles.mainItemList} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <div className={styles.mainBottomText}>
        <p>
          본 블로그는 <span className={styles.customBold}>Wix Blog</span>로
          제작되었습니다.
        </p>
      </div>
    </div>
  );
};

export default Main;
