import React from "react";
import { useState, useEffect } from "react";
// components
import Item from "../Components/Item"; // Item 컴포넌트를 불러옴

const MainItemList = () => {
  // 뉴스 API 불러오기
  // 불러온 기사 State 보관
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
