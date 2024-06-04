import React from "react";

function Star(props) {
  return (
    <span
      onClick={props.onClickHandleSetUserRating}
      style={{
        cursor: "pointer",
        color: props.filled ? "#ffc107" : "#e4e5e9",
        fontSize: "20px",
      }}
    >
      ★
    </span>
  );
}

export default Star;
