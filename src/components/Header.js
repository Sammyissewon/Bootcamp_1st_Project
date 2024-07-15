import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.title}>
      <img src="icon/wixblog.svg" alt="wixblog" />
      <div>
        <button>구독하기</button>
        <button>웹사이트 제작하기</button>
      </div>
    </div>
  );
};

export default Header;
