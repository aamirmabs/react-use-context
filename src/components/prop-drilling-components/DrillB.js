import React from "react";
import DrillC from "./DrillC";

function DrillB(props) {
  let content = "<DrillC propFromB={props.propFromA} />";

  return (
    <div className="container bg-B">
      <h4>Component B</h4>
      <p>
        Passing prop to Component C
        <br />
        <code>{content}</code>
      </p>
      <DrillC propFromB={props.propFromA} />
    </div>
  );
}

export default DrillB;
