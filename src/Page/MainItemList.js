import React from "react";
import { useState, useEffect } from "react";

// components
import Item from "../Components/Item"; // Item 컴포넌트를 불러옴

const items = Array.from({ length: 20 }); // 16개의 항목 생성

const MainItemList = () => {
  // 뉴스 API 불러오기
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.REACT_APP_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      <div className="MainItemList">
        <div className="grid-container">
          {articles.map((news, index) => {
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
          })}
        </div>
      </div>
    </>
  );
};

export default MainItemList;
