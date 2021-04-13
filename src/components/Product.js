import React, { useContext } from "react";
import { CurrencyContext } from "./contexts/CurrencyContext";

const Product = ({ title, price }) => {
  const currency = useContext(CurrencyContext);

  return (
    <div className="product">
      <h4>{title}</h4>
      <h4>
        {currency} {price}
      </h4>
    </div>
  );
};

export default Product;
