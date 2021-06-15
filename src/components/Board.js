import { useEffect, useState } from "react";
import Tile from "./Tile";
import createField from "../util/createField";
import revealNeighbors from "../util/revealNeighbors";

const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newBoard = createField(15, 15, 35);
    setBoard(newBoard.field);
  }, []);

  const raiseFlag = (e, x, y) => {
    e.preventDefault();
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[x][y].flagged = true;
    setBoard(newBoard);
  };

  const revealTile = (row, col) => {
    if (board[row][col].value === "X") {
      alert("EW!!!");
    }
    let newBoard = JSON.parse(JSON.stringify(board));
    if (board[row][col].value === 0) {
      newBoard = revealNeighbors(newBoard, row, col).board;
    } else {
      newBoard[row][col].revealed = true;
    }
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.map((row, i) => {
        return (
          <div className='row' key={i}>
            {row.map((item, j) => {
              return (
                <Tile
                  obj={item}
                  key={j}
                  raiseFlag={raiseFlag}
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
