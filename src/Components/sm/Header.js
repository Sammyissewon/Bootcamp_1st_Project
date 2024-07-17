import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.titleBox}>
        <img src="icon/wixblog.svg" alt="wixblog" className={classes.title} />
        <div>
          <button className={classes.subscribeButton}>구독하기</button>
          <button className={classes.produceButton}>웹사이트 제작하기</button>
        </div>
      </div>
      <div className={classes.nav}>
        <span>온라인 쇼핑몰</span>
        <span>온라인 마케팅</span>
        <span>웹 디자인</span>
        <span>비지니스 팀</span>
        <span>예술 & 포토그래피</span>
        <span>Wix 업데이트 및 사용방법</span>
        <img
          src="icon/search.svg"
          alt="search"
          className={classes.searchIcon}
        />
        <input
          type="text"
          className={classes.searchText}
          placeholder="검색하기..."
        />
      </div>
    </>
  );
};

export default Header;
