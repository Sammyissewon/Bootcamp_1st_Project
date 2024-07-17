import React from "react";
import Share from "./Share";
import authorImg from "../../assets/author-img.webp";
import "./AuthorInfo.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthorInfo = () => {
  const { id } = useParams();
  const newsState = useSelector((state) => state.news.newsState);
  const article = newsState[id];

  if (!article) {
    return <div>기사가 존재하지 않습니다.</div>;
  }

  return (
    <section className="author-info">
      <div className="author">
        <div className="author-img">
          <img src={authorImg} alt="author-img" />
        </div>
        <div className="author-name">By {article.author}</div>
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
