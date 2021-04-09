import React from "react";
import ContextComponentC from "./ContextComponentC";

const ContextComponentB = () => {
  return (
    <div className="container bg-B">
      <h1>ComponentB</h1>
      <p>ComponentB minds its own business.</p>
      <ContextComponentC />
    </div>
  );
};

export default ContextComponentB;
