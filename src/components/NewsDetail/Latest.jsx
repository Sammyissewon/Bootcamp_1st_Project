import React from "react";

const Latest = () => {
  return (
    <section className="latest">
      <div>
        <div>최근 게시물</div>
        <a href="/">전체 보기</a>
      </div>
      <div className="latest-thumb">
        <img
          src="https://paultan.org/image/2024/02/2024-BYD-Yuan-Up-China-reveal-1-1200x628.jpg"
          alt="latest-thumb"
        />
      </div>
      <div className="latest-title">
        Just 19 out of 137 Chinese EV brands to stay profitable by 2030 due to
        brutal price war – AlixPartners report
      </div>
    </section>
  );
};

export default Latest;
