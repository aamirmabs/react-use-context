import React from "react";
import DrillB from "./DrillB";

function DrillA() {
  let valueForE = "E is for Elixir!";
  let content1 = `let valueForE = "E is for Elixir!";`;
  let content2 = `<DrillB propFromA={valueForE} />`;

  return (
    <div className="container bg-A">
      <h4>Component A</h4>
      <p>
        Passing prop to Component B
        <br />
        <code>{content1}</code>
        <br />
        <code>{content2}</code>
      </p>
      <DrillB propFromA={valueForE} />
    </div>
  );
}

export default DrillA;
