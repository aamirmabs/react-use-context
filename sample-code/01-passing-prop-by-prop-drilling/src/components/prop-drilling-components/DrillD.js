import React from "react";
import DrillE from "./DrillE";

function DrillD(props) {
  let content = "<DrillE propFromD={valueForC} />";

  return (
    <div className="container bg-D">
      <h4>Component D</h4>
      <p>
        Passing prop to Component B
        <br />
        <code>{content}</code>
      </p>
      <DrillE propFromD={props.propFromC} />
    </div>
  );
}

export default DrillD;
