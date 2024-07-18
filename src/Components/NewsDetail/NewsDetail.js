import React from "react";
import NewsInfo from "./NewsInfo";
import AuthorInfo from "./AuthorInfo";
import Latest from "./Latest";
import Review from "./Review";
import classes from "./NewsDetail.module.css";

const NewsDetail = () => {
  return (
    <div className={classes.news_detail_wrapper}>
      <div className={classes.news_detail}>
        <NewsInfo />
        <AuthorInfo />
        <Latest />
        <Review />
      </div>
      <div className={classes.news_detail_aside}>
        <img src="../assets/aside-img.webp" alt="aside-img" />
      </div>
    </div>
  );
};

export default NewsDetail;
