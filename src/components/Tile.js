import Emoji from "./Emoji";

const Tile = ({ obj, toggleFlag, revealTile }) => {
  return (
    <>
      <div
        style={obj.revealed ? { backgroundColor: "rgba(144, 238, 144, 0.7)" } : {}}
        onClick={() => revealTile(obj.row, obj.col)}
        onContextMenu={(e) => toggleFlag(e, obj.row, obj.col)}
        className="tile"
      >
         
          {(() => {
            if (!obj.revealed && obj.flagged) return <Emoji symbol="🚩" label="flag"/>;
            if (!obj.revealed || obj.value === 0) return "";
            if (obj.value === "X") return <Emoji symbol="💩" label="poo"/>;
            return obj.value;
          })()}
        
      </div>
    </>
  );
};

export default Tile;
