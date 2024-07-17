import React from "react";
// import { useState, useEffect } from "react";
import { useEffect } from "react";
import styles from "./MainItemList.module.css";
// components
import Item from "../components/sw/Item"; // Item 컴포넌트를 불러옴

import { useDispatch } from "react-redux";
import { setNews } from "../store/news-data";

const MainItemList = () => {
  // 뉴스 API 불러오기
  // 불러온 기사 State 보관
  // const [articles, setArticles] = useState([]);
  // 데이터를 받아야할 곳에 사용
  // action과 관련된 값을 인자로 넣어서 보내줌
  const dispatch = useDispatch();

  // 시간표시 형식
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month}월 ${day}일 ${hours}시 ${minutes}분`;
  };

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
        return response.json();
      })
      .then((data) => {
        const formattedArticles = data.articles.map((article) => ({
          ...article,
          publishedAt: formatDate(article.publishedAt),
        }));
        // setArticles(formattedArticles);
        // dispatch(setNews(data.articles)
        dispatch(setNews(formattedArticles));
      });
    // }, []);
  }, [dispatch]);

  return (
    <>
      <div className={styles.gridContainer}>
        <Item />
        {/* {articles.map((news, index) => {
          return (
            // fetch 해온 source의 Key값을 활용하여, Props로 전달
            <Item
              key={index}
              title={news.title}
              src={news.urlToImage}
              date={news.publishedAt}
              url={news.url}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default MainItemList;
