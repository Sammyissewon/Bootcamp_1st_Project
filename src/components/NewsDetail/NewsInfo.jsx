import React from "react";
import Share from "./Share";
import shareImg from "../../assets/share.svg";
import "./NewsInfo.css";

const NewsInfo = () => {
  return (
    <section className="news-info-wrapper">
      <div className="news-info">
        <div className="news-date">2024-07-15T00:16:32Z</div>
        <div className="share-btn">
          <img src={shareImg} alt="share-btn" />
          <Share />
        </div>
      </div>
      <div className="news-title">
        Another Tesla With Over 400,000 Miles On One Battery
      </div>
      <div className="news-thumb">
        <img
          src="https://cleantechnica.com/wp-content/uploads/2024/04/Tesla-Model-3-White-Tesla-Model-S-Psychadelic-Supercharging-2-CleanTechnica-watermark-new.jpeg"
          alt="news-thumb"
        />
      </div>
      <div className="news-con">
        <p>
          Sign up for daily news updates from CleanTechnica on email. Or follow
          us on Google News!\r\nA week ago, I wrote an article about a guy in
          the UK with two high-mileage Tesla Model S sedans that are stil…
          [+5552 chars]
        </p>
      </div>
    </section>
  );
};

export default NewsInfo;
