import { useState } from "react";
import {ColorBox} from "./ColorBox";
export function AddColor() {
  //using hook
  const [color, setColor] = useState("orange");
  const styles = {
    backgroundColor: color,
  };

  const [colorList, setColorlist] = useState(["yellow", "green", "violet", "blue"]);

  //capture typing event-onchange
  return (
    <div>
      <input value={color} style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter the color" />
      <button onClick={() => setColorlist([...colorList, color])}>Add Color</button>

      {colorList.map((clr) => (<ColorBox color={clr} />))}
    </div>
  );
}
