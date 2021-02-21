import React, { FunctionComponent } from "react";
import { ADD_TO_BASKET } from "../../../../actions/types";
import { useStateValue } from "../../../../contexts/StateProvider";

import "./Product.css";

type ProductProps = {
  product: Product;
};

const Product: FunctionComponent<ProductProps> = ({ product }) => {
  const { title, price, rating, imageUrl, id } = product;
  const [{ basket }, dispatch] = useStateValue();
  const renderRating = () => {
    return [...Array(rating)].map((e, i) => <p key={i}>⭐</p>);
  };

  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: {
        item: {
          title,
          price,
          rating,
          imageUrl,
          id,
        },
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{renderRating()}</div>
      </div>
      <img src={imageUrl} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
