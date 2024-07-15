import React from "react";

import ItemList from "../Components/ItemList";
import mainImg from "../assets/main-img.png";

const Main = () => {
  return (
    <div>
      <section className="upper-side">
        <div className="left-side">
          <h4 className="main-article">
            꼭 알아두어야 할 모바일 웹 디자인 사례 16가지
          </h4>
          <button className="detail-button">자세히 보기 ></button>
        </div>

        <img src={mainImg} className="main-img"></img>
      </section>

      <section className="lower-side">
        <ItemList />
      </section>
    </div>
  );
};

export default Main;
