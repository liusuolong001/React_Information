import React, { forwardRef } from "react";

const FunComponent = forwardRef(function (props, ref) {
  return (
    <div>
      <h4 ref={ref}>{"hello funComponent"}</h4>
    </div>
  );
});

export default FunComponent;
