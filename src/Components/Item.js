import mockImg from "../assets/mock-img.jpg";

const Item = () => {
  return (
    <div className="itemCard">
      <img className="itemCard-img" src={mockImg} alt="item" />
      <div>
        <div className="uploadedDate">4일 전 1분</div>
        <div className="itemTitle">HTML 뜻과 HTML 웹사이트 만들기</div>
      </div>
    </div>
  );
};

export default Item;
