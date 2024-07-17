import React from "react";
import Share from "./Share";
import shareImg from "../../assets/share.svg";
import "./NewsInfo.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsInfo = () => {
  // 현재 url에 있는 id 파라미터를 추출해서 id변수에 저장함
  // /news/1 이면 useParams는 {id:1}을 반환
  // id는 1을 가짐
  const { id } = useParams();
  const newsState = useSelector((state) => state.news.newsState);
  // newsState 배열의 id 인덱스에 해당하는 기사를 가져옴
  // url의 id값에 따라 동적으로 특정 기사의 데이터를 가져와서
  // article 변수에 저장하고 기사의 세부 정보를 렌더링함
  const article = newsState[id];

  // id에 해당하는 기사가 존재하지 않는 경우
  // 문구 띄우기
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
