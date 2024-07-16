import React from "react";
import styles from "./Section.module.css";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/Pagination";

const Section = () => {
  return (
    <>
      <MainItemList className={styles.mainItemList} />
      <Pagination />
    </>
  );
};

export default Section;
