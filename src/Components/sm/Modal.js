import React from "react";
import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div>
      <span>홈페이지를 제작할 준비가 되셨나요?</span>
      <button>지금 시작하기</button>
      <img src="icon/delete.svg" alt="delete" />
    </div>
  );
};

export default Modal;
