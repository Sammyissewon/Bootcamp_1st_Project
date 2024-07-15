import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.listBox}>
      <ul className={classes.list}>
        <li>제품</li>
        <li>웹사이트 템플릿</li>
        <li>웹사이트 만들기</li>
        <li>웹사이트 디자인</li>
        <li>wix 기능</li>
        <li>앱 마켓</li>
        <li>웹 호스팅</li>
        <li>맞춤형 도메인</li>
        <li>웹사이트 접근성</li>
        <li>모바일 앱 빌더</li>
      </ul>
      <ul className={classes.list}>
        <li>솔루션</li>
        <li>온라인 쇼핑몰 웹사이트</li>
        <li>온라인 예약</li>
        <li>레스토랑 웹사이트</li>
        <li>블로그 웹사이트</li>
        <li>포트폴리오 웹사이트</li>
        <li>Wix Studio</li>
        <li>비즈니스 이메일</li>
        <li>로고 메이커</li>
      </ul>
      <ul className={classes.list}>
        <li>리소스</li>
        <li>Wix 블로그</li>
        <li>개인 정보 및 보안 허브</li>
      </ul>
      <ul className={classes.list}>
        <li>지원</li>
        <li>도움말 센터</li>
        <li>전문가 고용하기</li>
        <li>오용 신고</li>
        <li>시스템 상태</li>
      </ul>
      <ul className={classes.list}>
        <li>기업</li>
        <li>언론 보도 소개</li>
        <li>투자 정보</li>
        <li>Wix 캐피탈</li>
        <li>접근성 표시 정보</li>
        <li>특허 공고</li>
        <li>사이트맵</li>
        <li>채용 정보</li>
      </ul>
      <ul className={classes.list}>
        <img src="/icon/wix.svg" alt="wix" />
        <p>
          Wix 웹사이트 제작 도구는 기업 수준의 인프라와 비즈니스 기능에서부터
          고급 SEO 및 마케팅 도구까지 갖추고 있어 누구나 웹사이트를 제작하여
          온라인에서 성장할 수 있게 해주는 완전한 솔루션을 제공합니다.
        </p>
        <ul>
          <ul>소개</ul>
          <ul>문의하기</ul>
        </ul>
        <ul>
          <img src="/icon/youtube.svg" alt="wix" />
          <img src="/icon/facebook.svg" alt="wix" />
          <img src="/icon/instagram.svg" alt="wix" />
          <img src="/icon/tiktok.svg" alt="wix" />
          <img src="/icon/pinterest.svg" alt="wix" />
          <img src="/icon/twitter.svg" alt="wix" />
          <img src="/icon/linkedin.svg" alt="wix" />
        </ul>
      </ul>
    </div>
  );
};

export default Footer;
