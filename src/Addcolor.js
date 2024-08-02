import { useState } from "react";
import * as React from 'react'; 

export function Addcolor() {
  const [color, setColor] = useState("red");
  const [colorList, setColorList] = useState(["grey", "black", "pink", "blue", "yellow"]);
  const styles = {
    background: color,
  };
  return (

    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder='Enter the color you want'
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>add</button>
      {colorList.map((mn) => <Colorbox colorr={mn} />)}
    </div>

  );
}
 function Colorbox({colorr}){
  const styles={
    background:colorr,
    height:"50px",
    width:"250px",
    margin:"15px 0px"
  }
  return(
    <div style={styles}> </div>
  );
}