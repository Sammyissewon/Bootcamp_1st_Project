import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");

  return <div className={classes.main}>
    <img src="/icon/wix.svg" alt="wix" />
          <div className={classes.header}>로그인</div>
          <div className={classes.message}>
            아직 계정이 없으신가요? 
            <Link to={"/SignupForm"}>
            <span className={classes.signupForm}> 가입하기</span></Link>
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
          <span className={classes.password}>비밀번호 찾기</span>


  </div>;
};

export default Login;
