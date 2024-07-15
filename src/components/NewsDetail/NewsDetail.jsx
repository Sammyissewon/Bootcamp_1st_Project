import React from "react";
import NewsInfo from "./NewsInfo";
import AuthorInfo from "./AuthorInfo";
import Latest from "./Latest";
import Review from "./Review";
import asideImg from "../../assets/aside-img.webp";

const NewsDetail = () => {
  return (
    <>
      <div className="news-detail">
        <NewsInfo />
        <AuthorInfo />
        <Latest />
        <Review />
      </div>
      <div className="news-detail-aside">
        <img src={asideImg} alt="aside-img" />
      </div>
    </>
  );
};

export default NewsDetail;
