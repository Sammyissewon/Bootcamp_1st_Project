import React from "react";
import styles from "./Main.module.css";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/Pagination";

const Main = () => {
  return (
    <div>
      <section className={styles.upperSide}>
        <div className={styles.leftSide}>
          <h4 className={styles.mainArticle}>
            꼭 알아두어야 할 모바일 웹 디자인 사례 16가지
          </h4>
          <button className={styles.detailButton}>자세히 보기 </button>
        </div>
        <img
          src="assets/main.png"
          className={styles.mainImg}
          alt="main img"
        ></img>
      </section>
      <div className="line"></div>

      <MainItemList className={styles.mainItemList} />
      <Pagination />
    </div>
  );
};

export default Main;
