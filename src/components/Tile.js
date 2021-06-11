const Tile = ({ obj }) => {
  return (
    <>
      <h3>Tile</h3>
      <div>{`flagged = ${obj.flagged} `}</div>
      <div>{`revealed = ${obj.revealed} `}</div>
      <div>{`value = ${obj.value} `}</div>
      <div>{`x = ${obj.x} `}</div>
      <div>{`y = ${obj.y} `}</div>
    </>
  );
};

export default Tile;
