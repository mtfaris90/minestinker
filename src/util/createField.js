const createField = (rows, cols, mines) => {
  if (mines > rows * cols) {
    mines = (rows * cols) / 3;
  }

  const field = [];
  const mineCoords = [];

  // create empty field
  for (let i = 0; i < rows; i++) {
    let line = [];
    for (let j = 0; j < cols; j++) {
      line.push({
        value: 0,
        revealed: false,
        x: i,
        y: j,
        flagged: false,
      });
    }
    field.push(line);
  }

  // place mines in random locations in field
  let mineCount = 0;
  while (mineCount < mines) {
    let x = randomInRange(0, rows);
    let y = randomInRange(0, cols);
    if (field[x][y].value === 0) {
      field[x][y].value = "X";
      mineCoords.push([x, y]);
      mineCount += 1;
    }
  }

  // add neighbor counts
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
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (field[i][j].value === "X") {
        continue;
      }
      neighborCoords.forEach((coord) => {
        if (
          field[i + coord[0]] &&
          field[i + coord[0]][j + coord[1]] &&
          field[i + coord[0]][j + coord[1]].value === "X"
        ) {
          field[i][j].value += 1;
        }
      });
    }
  }

  return { field, mineCoords };
};

export default createField;

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}