import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import FlagsCounter from "./components/FlagsCounter";
import StartMenu from "./components/StartMenu";
import Timer from "./components/Timer";
import Emoji from "./components/Emoji";

function App() {
  const [timerActive, setTimerActive] = useState(false);
  const [nonMineCount, setNonMineCount] = useState(null);
  const [flags, setFlags] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [r, setR] = useState(0);
  const [c, setC] = useState(0);
  const [m, setM] = useState(0);


  const startGame = (e, selected, rows, cols, mines) => {
    e.preventDefault();
    if (selected === "beginner") {
      rows = 9;
      cols = 9;
      mines = 10;
    } else if (selected === "intermediate") {
      rows = 16;
      cols = 16;
      mines = 40;
    } else if (selected === "expert") {
      rows = 16;
      cols = 30;
      mines = 99;
    }
    setShowMenu(false);
    setR(rows);
    setC(cols);
    setM(mines);
    console.log(rows, cols, mines);
  };

  const handleWin = () => {
    setTimerActive(false);
    setNonMineCount(null);
    alert("YOU WIN!");
    setShowMenu(true);
  };

  const handleLoss = () => {
    setTimerActive(false);
    alert("YOU LOSE!");
    setShowMenu(true);
  };

  if (nonMineCount === 0) {
    handleWin();
  }

  return (
    <div className="App">
      <div className="header">
        <FlagsCounter flags={flags} />
        <h1 className="title">
          Minestinker
          <Emoji symbol="💩" label="poo"/>
          </h1>
        <Timer timerActive={timerActive} />
      </div>
      {showMenu ? <StartMenu startGame={startGame} /> : ""}
      <Board
        rows={r}
        cols={c}
        mines={m}
        flags={flags}
        setFlags={setFlags}
        timerActive={timerActive}
        setTimerActive={setTimerActive}
        nonMineCount={nonMineCount}
        setNonMineCount={setNonMineCount}
        handleLoss={handleLoss}
      />
    </div>
  );
}

export default App;
