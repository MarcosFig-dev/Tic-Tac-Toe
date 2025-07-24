import React from "react";

function Square({ index, value, onClick }) {
  return (
    <div
      className="cell"
      data-cell-index={index}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Square;