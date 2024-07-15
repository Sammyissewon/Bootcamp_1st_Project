import React from "react";
import NewsInfo from "./NewsInfo";
import AuthorInfo from "./AuthorInfo";
import Latest from "./Latest";
import Review from "./Review";

const NewsDetail = () => {
  return (
    <>
      <NewsInfo />
      <AuthorInfo />
      <Latest />
      <Review />
    </>
  );
};

export default NewsDetail;
