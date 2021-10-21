import React, { useState } from "react";

export default function ProjectTwo() {
  const [txtData, setTextData] = useState("");
  const [preData, setpreData] = useState("");

  function changeHandler(e) {
    setTextData(e.target.value);
  }
  function preView() {
    setpreData(txtData);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <textarea
          style={{ width: "80%" }}
          onChange={changeHandler}
          value={txtData}
        >
          {txtData}
        </textarea>
        <br></br>
        <button
          onClick={() => {
            setTextData("");
          }}
        >
          Clear Data
        </button>
        <br></br>
        <br></br>
        <p>{preData}</p>
        <button onClick={preView}>Preview Data</button>
        <p>{txtData.length} characters in the textarea.</p>
        <p>{txtData.split(" ").length} words in the data.</p>
      </div>
    </>
  );
}
