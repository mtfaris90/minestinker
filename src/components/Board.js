import Tile from "./Tile";
import createField from "../util/createField";

const Board = (props) => {
  const { field } = createField(4, 4, 4);
  console.log("field ", field);
  return (
    <>
      <h2>Board</h2>
      {field.map((row, i) => {
        return row.map((item, j) => {
          return <Tile obj={item} key={j + i}/>
        })
      })}
    </>
  );
};

export default Board;
