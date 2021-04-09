import React from "react";
import ContextComponentE from "./ContextComponentE";

const ContextComponentD = () => {
  return (
    <div className="container bg-D">
      <h1>ComponentD</h1>
      <p>ComponentD minds its own business.</p>
      <ContextComponentE />
    </div>
  );
};

export default ContextComponentD;
