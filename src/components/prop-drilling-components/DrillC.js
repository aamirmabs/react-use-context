import React from "react";
import DrillD from "./DrillD";

function DrillC(props) {
  let content = "<DrillD propFromC={props.propFromB} />";

  return (
    <div className="container bg-C">
      <h4>Component C</h4>
      <p>
        Passing prop to Component D
        <br />
        <code>{content}</code>
      </p>
      <DrillD propFromC={props.propFromB} />
    </div>
  );
}

export default DrillC;
