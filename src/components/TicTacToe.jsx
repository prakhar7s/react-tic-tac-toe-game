import { useState } from "react";
import Square from "./Square/Square";
import "./TicTacToe.css";
import "./variables.css";
const TicTacToe = () => {
  const [board, setBoard] = useState([
    new Array(3).fill(null),
    new Array(3).fill(null),
    new Array(3).fill(null),
  ]);
  const [chanceOfX, setChanceOfX] = useState(true);

  const resetGame = () => {
    setBoard([
      new Array(3).fill(null),
      new Array(3).fill(null),
      new Array(3).fill(null),
    ]);

    setChanceOfX(true);
  };

  return (
    <div className="tic-tac-toe-container">
      <div className="board">
        <div className="board-header">
          <div className={`player-tab${chanceOfX ? " active" : ""}`}>X</div>
          <div className={`player-tab${!chanceOfX ? " active" : ""}`}>O</div>
        </div>
        <div className="tic-tac-toe-board">
          {board.map((row, rowCords) =>
            row.map((col, colCords) => (
              <Square
                key={`${rowCords}-${colCords}`}
                cellCords={[rowCords, colCords]}
                setBoard={setBoard}
                board={board}
                chanceOfX={chanceOfX}
                setChanceOfX={setChanceOfX}
              />
            ))
          )}
        </div>
        <button className="reset-button" onClick={resetGame}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
