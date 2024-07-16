const Item = ({ src, date, title, url }) => {
  return (
    <div className="itemCard">
      <img className="itemCard-img" src={src} alt="item" />
      <div>
        <div className="uploadedDate">{date}</div>
        <h5 className="itemTitle">{title}</h5>
      </div>
    </div>
  );
};

export default Item;
