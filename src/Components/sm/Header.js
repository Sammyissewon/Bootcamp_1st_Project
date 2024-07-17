import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={classes.titleBox}>
        <Link to={"/"}>
          <img src="icon/wixblog.svg" alt="wixblog" className={classes.title} />
        </Link>
        <div>
          <Link to={"/Subscribe"}>
            <button className={classes.subscribeButton}>구독하기</button>
          </Link>
          <Link to={"/SignupForm"}>
            <button className={classes.produceButton}>웹사이트 제작하기</button>
          </Link>
        </div>
      </div>
      <div className={classes.nav}>
        <Link to={"/Section"}>
          <span>온라인 쇼핑몰</span>
        </Link>
        <Link to={"/Section"}>
          <span>온라인 마케팅</span>
        </Link>
        <Link to={"/Section"}>
          <span>웹 디자인</span>
        </Link>
        <Link to={"/Section"}>
          <span>비지니스 팀</span>
        </Link>
        <Link to={"/Section"}>
          <span>예술 & 포토그래피</span>
        </Link>
        <Link to={"/Section"}>
          <span>Wix 업데이트 및 사용방법</span>
        </Link>
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
