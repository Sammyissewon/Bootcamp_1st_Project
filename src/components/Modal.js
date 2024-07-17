import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";

const Modal = () => {
  const [show, setShow] = useState(false);

  //   // 페이지가 로드된 후 5초 후에 모달을 표시
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShow(true);
  //     }, 5000);

  //     // 컴포넌트가 언마운트될 때 타이머를 정리
  //     return () => clearTimeout(timer);
  //   }, []);

  // 모달 닫기
  const handleClose = () => setShow(false);
  //   `${classes.modal} ${show ? classes.show : ""}`

  return (
    <div className={classes.modal}>
      <span>홈페이지를 제작할 준비가 되셨나요?</span>
      <button onClick={handleClose}>지금 시작하기</button>
      <img src="icon/delete.svg" alt="delete" />
    </div>
  );
};

export default Modal;
