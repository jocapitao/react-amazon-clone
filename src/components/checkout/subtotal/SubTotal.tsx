import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../contexts/StateProvider";

import "./SubTotal.css";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const getSubTtotal = () => {
    return basket.reduce(function (acc: any, obj: { price: any }) {
      return acc + obj.price;
    }, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: any) => (
          <React.Fragment>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getSubTtotal()}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
