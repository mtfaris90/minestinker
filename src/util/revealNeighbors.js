const revealNeighbors = (board, row, col) => {
  console.log("--- passed in row/col ", row, col);
  if (board[row][col].revealed) return;

  let stack = [board[row][col]];

  while (stack.length !== 0) {
    let current = stack.pop();
    let { row: r, col: c } = current;
    console.log(current);

    if (!current.revealed) {
      current.revealed = true;
    }

    if (current.value !== 0) {
      break;
    }

    const neighborCoords = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    // add neighbor 0s to stack
    for (let i = 0; i < neighborCoords.length; i++) {
      const [offsetRow, offsetCol] = neighborCoords[i];
      console.log(
        "current row/col and stack",
        r + offsetRow,
        c + offsetCol,
        stack
      );
      if (board[r + offsetRow] !== undefined) {
        console.log("+");
        if (board[r + offsetRow][c + offsetCol] !== undefined) {
          console.log("++");
          if (!board[r + offsetRow][c + offsetCol].revealed) {
            console.log("+++");
            if (board[r + offsetRow][c + offsetCol].value === 0) {
              console.log("++++");
            }
          }
        }
      }
      if (
        board[r + offsetRow] !== undefined &&
        board[r + offsetRow][c + offsetCol] !== undefined &&
        !board[r + offsetRow][c + offsetCol].revealed &&
        board[r + offsetRow][c + offsetCol].value === 0
      ) {
        console.log(
          "stacking offset coords (row/col) ",
          r + offsetRow,
          c + offsetCol
        );
        stack.push(board[r + offsetRow][c + offsetCol]);
      }
    }

    // reveal neighbors
    for (let i = 0; i < neighborCoords.length; i++) {
      const [offsetRow, offsetCol] = neighborCoords[i];
      if (board[r + offsetRow] && board[r + offsetRow][c + offsetCol]) {
        board[r + offsetRow][c + offsetCol].revealed = true;
      }
    }
  }
  return { board };
};

export default revealNeighbors;
