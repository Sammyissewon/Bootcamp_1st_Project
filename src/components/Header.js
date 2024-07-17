import React from "react";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="header">가입하기</div>
      <div className="message">
      이미 사용 중인 계정이 있다면 <span className='login'>로그인</span>하세요.
      </div>
    </header>
  );
};

export default Header;
