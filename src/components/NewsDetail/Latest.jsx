import React from "react";
import "./Latest.css";

const Latest = () => {
  return (
    <section className="latest-wrapper">
      <div className="latest">
        <div>최근 게시물</div>
        <a href="/">전체 보기</a>
      </div>
      <div className="latest-thumb">
        <a href="/">
          <img
            src="https://paultan.org/image/2024/02/2024-BYD-Yuan-Up-China-reveal-1-1200x628.jpg"
            alt="latest-thumb"
          />
        </a>
      </div>
      <div className="latest-title">
        <a href="/">
          Just 19 out of 137 Chinese EV brands to stay profitable by 2030 due to
          brutal price war – AlixPartners report
        </a>
      </div>
    </section>
  );
};

export default Latest;
