import "./Square.css";

const Square = ({
  cellCords,
  board,
  setBoard,
  chanceOfX,
  setChanceOfX,
  displayToastMsg,
  winnerCells,
  setWinnerCells,
}) => {
  const row = cellCords[0];
  const col = cellCords[1];
  const cellValue = board[row][col];

  const checkWinner = () => {
    if (checkGameOver()) {
      return displayToastMsg("Game Over!");
    }

    //check all rows
    const rowsRes = checkRows();
    if (rowsRes[0]) {
      highlightWinner(rowsRes[1]);
      displayToastMsg(`${board[rowsRes[1]][0]} is the Winner!`);
    }

    //check all cols
    const tempRows = convertColsToRows();
    const colsRes = checkRows(tempRows);

    if (colsRes[0]) {
      highlightWinner(colsRes[1], "col");
      displayToastMsg(`${board[0][colsRes[1]]} is the Winner!`);
    }

    //check diagonals
    const first = board[0][0];
    const dia = first && [0, 1, 2].every((idx) => board[idx][idx] === first);
    if (dia) {
      setWinnerCells(["0-0", "1-1", "2-2"]);
      displayToastMsg(`${board[0][0]} is the Winner!`);
    }

    //check rev diagonal
    const rfirst = board[0][2];
    const resDia =
      rfirst && [0, 1, 2].every((idx) => board[idx][2 - idx] === rfirst);
    if (resDia) {
      setWinnerCells(["0-2", "1-1", "2-0"]);
      displayToastMsg(`${board[0][2]} is the Winner!`);
    }
  };

  const checkRows = (rows = board) => {
    var winner = false;
    return [
      rows.some((row, idx) => {
        const first = row[0];
        if (!first) return false;
        const res = row.every((cell) => cell === first);
        if (res) {
          winner = idx;
          return true;
        }
        return false;
      }),
      winner,
    ];
  };

  const highlightWinner = (idx, type = "row") => {
    setWinnerCells(
      [0, 1, 2].map((cell) =>
        type === "row" ? `${idx}-${cell}` : `${cell}-${idx}`
      )
    );
  };

  const convertColsToRows = () => {
    var res = [[], [], []];

    for (const i in board) {
      for (const j in board[i]) {
        if (i === 0) res[j] = [];
        res[j][i] = board[i][j];
      }
    }

    return res;
    // console.log(res, "s");
  };

  const checkGameOver = () => {
    const flattenBoardValues = board.flat(8);
    return flattenBoardValues.every((cell) => cell !== null);
  };

  const handleCellClick = () => {
    if (board[row][col]) return;

    const tempBoard = board;
    tempBoard[row][col] = chanceOfX ? "X" : "O";
    setBoard([...tempBoard]);
    setChanceOfX((preChance) => !preChance);

    checkWinner();
  };

  return (
    <div
      className={`board-cell${
        !cellValue
          ? ""
          : cellValue === "X"
          ? " filled player-x"
          : " filled player-o"
      }${
        winnerCells.some((cellCords) => {
          console.log(cellCords, `${row}-${col}`);
          return cellCords === `${row}-${col}`;
        })
          ? " winner-cell"
          : ""
      }`}
      style={{ cursor: cellValue ? "not-allowed" : "" }}
      onClick={handleCellClick}
    >
      {cellValue}
    </div>
  );
};

export default Square;
