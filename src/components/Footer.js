import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="plan">
        * 가입 시 Wix <span className="line">이용약관</span>에 동의하며{" "}
        <span className="line">개인정보처리방침</span>을 확인한 것으로
        간주됩니다.
        <br />본 사이트는 reCAPTCHA Enterprise로 보호되며,{" "}
        <span className="line">Google 개인정보처리방침</span> 및 서비스 약관의
        적용을 받습니다.
      </p>
    </footer>
  );
};

export default Footer;
