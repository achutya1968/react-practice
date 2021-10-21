import React, { useState} from 'react'
import { ChromePicker } from "react-color";
//import React,  from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#fff");
  const [showColor, setshowColor] = useState(false);
  return (
    <div className="App">
      <div>
        <button onClick={() => setshowColor((showColor) => !showColor)}>

          {showColor ? "Close color picker" : "Pick a color"}

        </button>

        {showColor && (
        
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}

        <h2>You picked:{color}</h2>
      </div>
    </div>
  );
}

export default App;
