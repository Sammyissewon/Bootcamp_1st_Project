import React, { useState } from "react";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <div className={styles.header}>가입하기</div>
      <div className={styles.message}>
        이미 사용 중인 계정이 있다면{" "}
        <span className={styles.login}>로그인</span>
        하세요.
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          placeholder="이메일"
          className={styles.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <input
          type="email"
          placeholder="이메일 인증"
          className={styles.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="password"
          placeholder="비밀번호 선택"
          className={styles.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="password"
          placeholder="비밀번호 확인"
          className={styles.password}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        가입하기
      </button>

      {/* <div className={styles.container}>
        <div className={styles.lines}>
          <span className={styles.textTop}></span>
          <span className={styles.textMiddle}>또는</span>
          <span className={styles.textBottom}></span>
        </div>
      </div> */}

      <p className={styles.footer}>
        * 가입 시 Wix <span className={styles.line}>이용약관</span>에 동의하며{" "}
        <span className={styles.line}>개인정보처리방침</span>을 확인한 것으로
        간주됩니다.
        <br />본 사이트는 reCAPTCHA Enterprise로 보호되며,{" "}
        <span className={styles.line}>Google 개인정보처리방침</span> 및 서비스
        약관의 적용을 받습니다.
      </p>

      <button className={styles.googleBtn}>Google 계정으로 계속하기</button>
      <button className={styles.facebookBtn}>Facebook 계정으로 계속하기</button>
    </form>
  );
};

export default SignupForm;
