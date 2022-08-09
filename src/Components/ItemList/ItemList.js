import Item from "../Item/Item";

import ArrowLeft from "../../assets/Icons/ArrowLeft.svg";
import ArrowRight from "../../assets/Icons/ArrowRight.svg";
import "./ItemList.styles.css";

const ItemList = ({ products }) => {
  return (
    <div className="itemList_container">
      <div>
        <div className="card_container">
          {products.map((products) => (
            <Item key={products.productId} {...products} />
          ))}
        </div>
      </div>
      <div className="input_container">
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </div>
      <button className="button_arrow left">
        <img src={ArrowLeft} alt="ArrowLeft" />
      </button>
      <button className="button_arrow">
        <img src={ArrowRight} alt="ArrowRight" />
      </button>
    </div>
  );
};

export default ItemList;
