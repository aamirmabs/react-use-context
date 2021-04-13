import React from "react";
import ProductList from "./ProductList";

import { CurrencyContext } from "./contexts/CurrencyContext";

import STORE_DATA from "./storeData";

const Store = () => {
  return (
    <CurrencyContext.Provider value="USD">
      <div>
        <h2>Store</h2>
        <ProductList products={STORE_DATA} />
      </div>
    </CurrencyContext.Provider>
  );
};

export default Store;
