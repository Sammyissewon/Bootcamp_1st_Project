import React from "react";
import NewsInfo from "./NewsInfo";
import AuthorInfo from "./AuthorInfo";
import Latest from "./Latest";
import Review from "./Review";
import "./NewsDetail.css";

const NewsDetail = () => {
  return (
    <div className="news-detail-wrapper">
      <div className="news-detail">
        <NewsInfo />
        <AuthorInfo />
        <Latest />
        <Review />
      </div>
      <div className="news-detail-aside">
        <img src="../assets/aside-img.webp" alt="aside-img" />
      </div>
    </div>
  );
};

export default NewsDetail;
