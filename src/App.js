import "./App.css";
import Board from "./components/Board";
import MinesCounter from "./components/MinesCounter";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <MinesCounter />
        <div className="title">Minestinker</div>
        <Timer />
      </div>
      <Board />
    </div>
  );
}

export default App;
