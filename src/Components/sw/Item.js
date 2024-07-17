import styles from "./Item.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Item = () => {
  const newsState = useSelector((state) => state.news.newsState);

  return (
    <>
      {newsState.map((news, index) => {
        return (
          <div key={index} className={styles.itemCard}>
            <Link to={`/news/${index}`}>
              <img
                src={news.urlToImage}
                alt={news.title}
                className={styles.itemCardImg}
              />
            </Link>
            <div className={styles.itemInfo}>
              <div className={styles.uploadedDate}>{news.publishedAt}</div>
              <Link to={`/news/${index}`}>
                <h5 className={styles.itemTitle}>{news.title}</h5>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

// const Item = ({ src, date, title, url }) => {
//   return (
//     <div className={styles.itemCard}>
//       <img className={styles.itemCardImg} src={src} alt="item" />
//       <div className={styles.itemInfo}>
//         <div className={styles.uploadedDate}>{date}</div>
//         <h5 className={styles.itemTitle}>{title}</h5>
//       </div>
//     </div>
//   );
// };

export default Item;
