const revealNeighbors = (board, row, col, nonMineCount) => {
  if (board[row][col].revealed) return;

  let stack = [board[row][col]];

  while (stack.length !== 0) {
    let current = stack.pop();
    let { row: r, col: c } = current;

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
      
      if (
        board[r + offsetRow] !== undefined &&
        board[r + offsetRow][c + offsetCol] !== undefined &&
        !board[r + offsetRow][c + offsetCol].revealed &&
        board[r + offsetRow][c + offsetCol].value === 0
      ) {
        stack.push(board[r + offsetRow][c + offsetCol]);
      }
    }

    // reveal neighbors
    for (let i = 0; i < neighborCoords.length; i++) {
      const [offsetRow, offsetCol] = neighborCoords[i];
      if (board[r + offsetRow] && board[r + offsetRow][c + offsetCol] && !board[r + offsetRow][c + offsetCol].revealed) {
        board[r + offsetRow][c + offsetCol].revealed = true;
        nonMineCount -= 1;
      }
    }
  }
  return { board, nonMineCount };
};

export default revealNeighbors;
