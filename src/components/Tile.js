const Tile = ({ obj, raiseFlag, revealTile }) => {
  return (
    <>
      <div
        style={obj.revealed ? { backgroundColor: "lightgrey" } : {}}
        onClick={() => revealTile(obj.row, obj.col)}
        onContextMenu={(e) => raiseFlag(e, obj.row, obj.col)}
        className="tile"
      >
        {obj.revealed && obj.value !== 0 ? obj.value : ""}
        {/* {obj.value} */}
      </div>
    </>
  );
};

export default Tile;
