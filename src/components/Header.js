import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.titleBox}>
      <img src="icon/wixblog.svg" alt="wixblog" className={classes.title} />
      <div>
        <button className={classes.subscribeButton}>구독하기</button>
        <button className={classes.produceButton}>웹사이트 제작하기</button>
      </div>
    </div>
  );
};

export default Header;
