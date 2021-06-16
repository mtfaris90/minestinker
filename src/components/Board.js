import { useEffect, useState } from "react";
import Tile from "./Tile";
import createField from "../util/createField";
import revealNeighbors from "../util/revealNeighbors";

const Board = ({
  flags,
  setFlags,
  timerActive,
  setTimerActive,
  nonMineCount,
  setNonMineCount,
  handleLoss,
  rows,
  cols,
  mines,
}) => {
  const [board, setBoard] = useState([]);
  const [mineCoords, setMineCoords] = useState([]);

  useEffect(() => {
    setFlags(mines);
    const newBoard = createField(rows, cols, mines);
    setNonMineCount(rows * cols - newBoard.mineCoords.length - 2);
    setMineCoords(newBoard.mineCoords);
    setBoard(newBoard.field);
  }, [setNonMineCount, setFlags, rows, cols, mines]);

  useEffect(() => {}, [nonMineCount]);

  const toggleFlag = (e, x, y) => {
    e.preventDefault();
    const newBoard = JSON.parse(JSON.stringify(board));
    if (newBoard[x][y].flagged) {
      setFlags(flags + 1);
    } else {
      setFlags(flags - 1);
    }
    newBoard[x][y].flagged = !newBoard[x][y].flagged;
    setBoard(newBoard);
  };

  const revealTile = (row, col) => {
    if (!timerActive) {
      setTimerActive(true);
    }
    if (board[row][col].flagged) return;
    let newBoard = JSON.parse(JSON.stringify(board));
    if (board[row][col].value === "X") {
      handleLoss();
      for (let i = 0; i < mineCoords.length; i++) {
        newBoard[mineCoords[i][0]][mineCoords[i][1]].revealed = true;
      }
    }
    if (board[row][col].value === 0) {
      let temp = revealNeighbors(newBoard, row, col, nonMineCount);
      newBoard = temp.board;
      setNonMineCount(temp.nonMineCount);
    } else {
      newBoard[row][col].revealed = true;
      setNonMineCount(nonMineCount - 1);
    }
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.map((row, i) => {
        return (
          <div className="row" key={i}>
            {row.map((item, j) => {
              return (
                <Tile
                  obj={item}
                  key={j}
                  toggleFlag={toggleFlag}
                  revealTile={revealTile}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
