import React from "react";
import { currencies as CURRENCIES } from "./storeData";

const CurrencySelector = ({ setCurrency }) => {
  return (
    <div>
      <h5>Select Currency</h5>
      <span>
        <button
          onClick={() => {
            setCurrency(CURRENCIES.USD);
          }}
        >
          USD
        </button>
        <button
          onClick={() => {
            setCurrency(CURRENCIES.EUR);
          }}
        >
          EUR
        </button>
        <button
          onClick={() => {
            setCurrency(CURRENCIES.GBP);
          }}
        >
          GBP
        </button>
      </span>
    </div>
  );
};

export default CurrencySelector;
