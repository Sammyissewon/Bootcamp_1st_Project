import React, { useState } from "react";
import classes from "./SignupForm.module.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form className={classes.signupForm} onSubmit={handleSubmit}>
          <div className={classes.header}>가입하기</div>
          <div className={classes.message}>
            이미 사용 중인 계정이 있다면{" "}
            <span className={classes.login}>로그인</span>
            하세요.
          </div>
          <div className={classes.formGroup}>
            <input
              type="email"
              placeholder="이메일"
              className={classes.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <input
              type="email"
              placeholder="이메일 인증"
              className={classes.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <input
              type="password"
              placeholder="비밀번호 선택"
              className={classes.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className={classes.password}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={classes.submitBtn}>
            가입하기
          </button>
        </form>

        <div className={classes.container}>
          <div className={classes.lines}>
            <span className={classes.textTop}></span>
            <span className={classes.textMiddle}>또는</span>
            <span className={classes.textBottom}></span>
          </div>
        </div>

        <div>
          <button className={classes.googleBtn}>
            Google 계정으로 계속하기
          </button>
          <button className={classes.facebookBtn}>
            Facebook 계정으로 계속하기
          </button>
        </div>
      </div>
      <p className={classes.footer}>
        * 가입 시 Wix <span className={classes.line}>이용약관</span>에 동의하며{" "}
        <span className={classes.line}>개인정보처리방침</span>을 확인한 것으로
        간주됩니다.
        <br />본 사이트는 reCAPTCHA Enterprise로 보호되며,{" "}
        <span className={classes.line}>Google 개인정보처리방침</span> 및 서비스
        약관의 적용을 받습니다.
      </p>
    </>
  );
};

export default SignupForm;
