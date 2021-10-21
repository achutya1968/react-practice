import React,{useState} from 'react'

let color = "red";
let txtColor = "black";
let data = "Project One";

export default function ProjectOne() {
  const [bgColor, setBgcolor] = useState(color);
  const [text, setText] = useState(data);
  const [textColor, setTextColor] = useState(txtColor);

  function changeColor() {
    setBgcolor("blue");
    setText("Completed!");
    setTextColor("white");
  }

  function normalData(){
    setBgcolor(color)
    setText(data)
    setTextColor(txtColor)
  }
  
  return (
    <>
      <div style={{ background: bgColor, color: textColor }}>
        <h1>{text}</h1>
      </div>
      <button onClick={changeColor} onDoubleClick={normalData}>Click here</button>
      <br />
    </>
  );
}
