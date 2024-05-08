import { useState } from "react";
import "./Car.css";

function Car() {
  let [color, setColor] = useState("red");
  let [input, setInput] = useState("red");

  return (
    <>
      <div className={color}>
        <h1>My {color} Car</h1>
        <label htmlFor="color">Enter Color : </label>
        <input onChange={(e) => setInput(e.target.value)} value={input}></input>
        <button onClick={() => setColor(input)}>Change Color</button>
        <br />
        <br />
      </div>
    </>
  );
}

export default Car;
