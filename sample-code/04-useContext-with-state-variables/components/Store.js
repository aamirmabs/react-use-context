import React, { useState } from "react";
import ProductList from "./ProductList";
import CurrencySelector from "./CurrencySelector";

import { CurrencyContext } from "./contexts/CurrencyContext";

import STORE_DATA, { currencies as CURRENCIES } from "./storeData";

const Store = () => {
  const [activeCurrency, setActiveCurrency] = useState(CURRENCIES.USD);

  return (
    <CurrencyContext.Provider value={activeCurrency}>
      <div>
        <h2>Store</h2>
        <CurrencySelector setCurrency={setActiveCurrency} />
        <ProductList products={STORE_DATA} />
      </div>
    </CurrencyContext.Provider>
  );
};

export default Store;
