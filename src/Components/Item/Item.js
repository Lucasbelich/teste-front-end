import React from "react";
import { useContext } from "react";

import CartContext from "../../Context/CartContext";

import LinearStar from "../../assets/Icons/LinearStar.svg";
import SolidStar from "../../assets/Icons/SolidStar.svg";

import "./Item.styles.css";

const Item = ({
  productId,
  productName,
  stars: productStars,
  imageUrl,
  listPrice,
  price,
  installments,
}) => {
  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    const productObj = {
      productId,
      productName,
      price,
    };
    addItem(productObj);
  };

  const starsArray = [1, 2, 3, 4, 5];
  const priceFixed = (price * 0.01).toFixed(2);
  const listPriceFixed = listPrice && (listPrice * 0.01).toFixed(2);
  const installmentsArray = installments[0];
  const quantity = installmentsArray?.quantity;
  const valueFixed = (installmentsArray?.value * 0.01).toFixed(2);

  return (
    <article className="product_card">
      {listPrice ? (
        <span className="off_card">
          <p>OFF</p>
        </span>
      ) : null}
      <img src={imageUrl} alt={productName} className="ItemImg" />
      <h2 className="productName_card">{productName}</h2>
      <div>
        {starsArray.map((stars, i) => (
          <img
            key={stars}
            alt="star"
            src={stars <= productStars ? SolidStar : LinearStar}
          />
        ))}
      </div>
      <p className={"listPrice_card " + (listPriceFixed ? "" : "none")}>
        de R$ {listPriceFixed}
      </p>
      <p className="price_card">por R$ {priceFixed}</p>
      <p className={"installments_card " + (quantity ? "" : "none")}>
        ou em {quantity} x de R$ {valueFixed}
      </p>
      <button className="button_card" onClick={() => handleAdd()}>
        COMPRAR
      </button>
    </article>
  );
};

export default Item;
