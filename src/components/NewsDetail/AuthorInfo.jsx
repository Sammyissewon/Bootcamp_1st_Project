import React from "react";
import Share from "./Share";

const AuthorInfo = () => {
  return (
    <section className="Author-info">
      <div className="author">Jake Richardson</div>
      <div className="author-shortcut">
        <Share />
        <a href="/">카테고리명</a>
      </div>
    </section>
  );
};

export default AuthorInfo;
