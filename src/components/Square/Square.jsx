import "./Square.css";

const Square = ({ cellCords, board, setBoard, chanceOfX, setChanceOfX }) => {
  const row = cellCords[0];
  const col = cellCords[1];
  const cellValue = board[row][col];

  const checkWinner = () => {};

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
      }`}
      style={{ cursor: cellValue ? "not-allowed" : "" }}
      onClick={handleCellClick}
    >
      {cellValue}
    </div>
  );
};

export default Square;
