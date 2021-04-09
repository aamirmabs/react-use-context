import React from "react";
import { ContextFromA } from "./ContextComponentA";

const ContextComponentE = () => {
  return (
    <ContextFromA.Consumer>
      {(valueForE) => (
        <div className="container bg-E">
          <h1>ComponentE</h1>
          <p>ComponentE consumes the Context - {valueForE}</p>
        </div>
      )}
    </ContextFromA.Consumer>
  );
};

export default ContextComponentE;
