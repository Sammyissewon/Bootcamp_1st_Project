import React from "react";
import Share from "./Share";
import shareImg from "../../assets/share.svg";
import "./NewsInfo.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsInfo = () => {
  const { id } = useParams();
  const newsState = useSelector((state) => state.news.newsState);
  const article = newsState[id];

  if (!article) {
    return <div>기사가 존재하지 않습니다.</div>;
  }

  return (
    <section className="news-info-wrapper">
      <div className="news-info">
        <div className="news-date">{article.publishedAt}</div>
        <div className="share-btn">
          <img src={shareImg} alt="share-btn" />
          <Share />
        </div>
      </div>
      <div className="news-title">{article.title}</div>
      <div className="news-thumb">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <div className="news-con">
        <p>{article.description}</p>
      </div>
    </section>
  );
};

export default NewsInfo;
