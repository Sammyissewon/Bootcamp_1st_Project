import React from "react";
import classes from "./Main.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/sw/Pagination";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  // Redux state 불러오기
  const newsState = useSelector((state) => state.news.newsState);
  // 1번째 최신 기사
  const mainArticle = newsState[0];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={classes.upperSide}>
        <div className={classes.leftSide}>
          <Link to="/news/0">
            <h4 className={classes.mainArticle}>{mainArticle.title}</h4>
          </Link>
          <Link to="/news/0">
            <button className={classes.detailButton}>자세히 보기 </button>
          </Link>
        </div>
        <img
          src={mainArticle.urlToImage}
          className={classes.mainImg}
          alt="main img"
        ></img>
      </div>

      <MainItemList className={classes.mainItemList} category="general" />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Main;
