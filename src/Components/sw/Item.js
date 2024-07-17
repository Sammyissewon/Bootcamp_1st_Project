import classes from "./Item.module.css";

const Item = ({ src, date, title, url }) => {
  return (
    <div className={classes.itemCard}>
      <img className={classes.itemCardImg} src={src} alt="item" />
      <div className={classes.itemInfo}>
        <div className={classes.uploadedDate}>{date}</div>
        <h5 className={classes.itemTitle}>{title}</h5>
      </div>
    </div>
  );
};

export default Item;
