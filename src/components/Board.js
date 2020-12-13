import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
  return (
    <div className="board">
      {cells.map((cell, i) => {
        return <Cell key={i} value={cell} onClick={() => onClick(i)}></Cell>;
      })}
    </div>
  );
};

export default Board;
