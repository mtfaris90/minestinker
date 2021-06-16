import { useState } from "react";

const StartMenu = ({ startGame }) => {
  const [rows, setRows] = useState(9);
  const [cols, setCols] = useState(9);
  const [mines, setMines] = useState(10);
  const [selected, setSelected] = useState("beginner");
  return (
    <div className="startMenu">
      <form onSubmit={(e) => startGame(e, selected, rows, cols, mines)}>
        <label>
          <input type="radio" checked={selected === "beginner"} onChange={() => setSelected("beginner")}></input>
          Beginner
        </label>
        <label>
          <input type="radio" checked={selected === "intermediate"} onChange={() => setSelected("intermediate")}></input>
          Intermediate
        </label>
        <label>
          <input type="radio" checked={selected === "expert"} onChange={() => setSelected("expert")}></input>
          Expert
        </label>
        <br/>
        <label>
          <input type="radio" checked={selected === "custom"} onChange={() => setSelected("custom")}></input>
          Custom
        </label>
        <br/>
        <label>
          Rows
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Cols
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Mines
          <input
            type="number"
            value={mines}
            onChange={(e) => setMines(e.target.value)}
          />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StartMenu;
