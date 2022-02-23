//{val}-> object destructuring
export function GameBox({ val, onPlayerClick }) {
  //const val="X";
  //const [val, setVal]=useState(null);
  const styles = {
    color: val === "X" ? "green" : "white",
  };
  return <div
    //onClick={()=>setVal(val === "X" ? "O":"X")}
    onClick={() => onPlayerClick()}
    style={styles} className="game-box">
    {val}
  </div>;
}
