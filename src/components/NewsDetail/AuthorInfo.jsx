import React from "react";
import Share from "./Share";
import authorImg from "../../assets/author-img.webp";
import "./AuthorInfo.css";

const AuthorInfo = () => {
  return (
    <section className="author-info">
      <div className="author">
        <div className="author-img">
          <img src={authorImg} alt="author-img" />
        </div>
        <div className="author-name">Jake Richardson</div>
      </div>
      <div className="author-shortcut">
        <Share />
        <div className="category-shortcut">
          <a href="/">카테고리명</a>
        </div>
      </div>
    </section>
  );
};

export default AuthorInfo;
