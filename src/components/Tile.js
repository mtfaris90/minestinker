const Tile = ({ obj, toggleFlag, revealTile }) => {
  return (
    <>
      <div
        style={obj.revealed ? { backgroundColor: "lightgrey" } : {}}
        onClick={() => revealTile(obj.row, obj.col)}
        onContextMenu={(e) => toggleFlag(e, obj.row, obj.col)}
        className="tile"
      >
        {obj.revealed ? obj.value !== 0 ? obj.value : "" : obj.flagged ? "*" : ""}
      </div>
    </>
  );
};

export default Tile;
