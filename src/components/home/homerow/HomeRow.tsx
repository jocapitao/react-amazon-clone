import React, { FunctionComponent } from "react";

import Product from "./product/Product";
import "./HomeRow.css";

type HomeRowProps = {
  products: Product[];
};

const HomeRow: FunctionComponent<HomeRowProps> = ({ products }) => {
  const renderProducts = () => {
    return products.map(p => <Product key={p.id} product={p} />);
  };

  return <div className="home__row">{renderProducts()}</div>;
};

export default HomeRow;
