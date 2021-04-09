import React from "react";
import ContextComponentB from "./ContextComponentB";

export const ContextFromA = React.createContext(null);

const ContextComponentA = () => {
  return (
    <ContextFromA.Provider value="E is for Elixir!">
      <div className="container bg-A">
        <h1>ComponentA</h1>
        <p>ComponentA provides the Context</p>
        <ContextComponentB />
      </div>
    </ContextFromA.Provider>
  );
};

export default ContextComponentA;
