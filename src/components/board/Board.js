import React from "react";

import { Square } from "components/square";

import "./board.css";

function Board() {
  const renderSquare = (i) => <Square squareValue={i} />;

  const renderRow = (a, b, c) => (
    <div className="board-row">
      {renderSquare(a)}
      {renderSquare(b)}
      {renderSquare(c)}
    </div>
  );

  return (
    <div>
      {renderRow(0, 1, 2)}
      {renderRow(3, 4, 5)}
      {renderRow(6, 7, 8)}
    </div>
  );
}

export { Board };
