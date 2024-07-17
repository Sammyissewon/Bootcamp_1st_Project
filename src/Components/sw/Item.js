import styles from "./Item.module.css";

const Item = ({ src, date, title, url }) => {
  return (
    <div className={styles.itemCard}>
      <img className={styles.itemCardImg} src={src} alt="item" />
      <div className={styles.itemInfo}>
        <div className={styles.uploadedDate}>{date}</div>
        <h5 className={styles.itemTitle}>{title}</h5>
      </div>
    </div>
  );
};

export default Item;
