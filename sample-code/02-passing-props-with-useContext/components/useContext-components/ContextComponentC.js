import React from "react";
import ContextComponentD from "./ContextComponentD";

const ContextComponentC = () => {
  return (
    <div className="container bg-C">
      <h1>ComponentC</h1>
      <p>ComponentC minds its own business.</p>
      <ContextComponentD />
    </div>
  );
};

export default ContextComponentC;
