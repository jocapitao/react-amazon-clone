import React from "react";
import { REMOVE_FROM_BASKET } from "../../actions/types";
import { useStateValue } from "../../contexts/StateProvider";

import "./Checkout.css";
import SubTotal from "./subtotal/SubTotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (product: Product) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: {
        item: {
          product,
        },
      },
    });
  };

  const renderItems = () => {
    return basket.map((product: Product) => {
      const { title, price, imageUrl, rating } = product;
      return (
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">{rating}</div>
          </div>
          <img src={imageUrl} alt="" />
          <button onClick={() => removeFromBasket(product)}>
            Remove from Basket
          </button>
        </div>
      );
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {renderItems()}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
