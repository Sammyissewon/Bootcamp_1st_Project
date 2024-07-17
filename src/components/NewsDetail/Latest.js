import React from "react";
import classes from "./Latest.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Latest = () => {
  const { id } = useParams();
  const newsState = useSelector((state) => state.news.newsState);
  const article = newsState[id];
  const latestArticle = newsState[0];
  const secondArticle = newsState[1];

  if (!article) {
    return <div>기사가 존재하지 않습니다.</div>;
  }

  return (
    <section className={classes.latest_wrapper}>
      <div className={classes.latest}>
        <div>최근 게시물</div>
        <a href="/">전체 보기</a>
      </div>
      {/* id가 0이 아닐때 (첫번째 게시물이 아닐때) */}
      {/* 최근게시물에 첫번째 게시물 띄우기 */}
      {id !== "0" && latestArticle ? (
        <>
          <Link to="/news/0">
            <div className={classes.latest_thumb}>
              <img src={latestArticle.urlToImage} alt={latestArticle.title} />
            </div>
          </Link>
          <div className={classes.latest_title}>
            <Link to="/news/0">
              <div>{latestArticle.title}</div>
            </Link>
          </div>
        </>
      ) : (
        // id가 0일때 (첫번째 게시물일때)
        // 최근게시물에 두번째 게시물 띄우기
        <>
          <Link to="/news/1">
            <div className={classes.latest_thumb}>
              <img src={secondArticle.urlToImage} alt={secondArticle.title} />
            </div>
          </Link>
          <div className={classes.latest_title}>
            <Link to="/news/1">
              <div>{latestArticle.title}</div>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Latest;
