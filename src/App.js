import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import run from "./gemini";

function App() {
  const [value, setValue] = useState("");
  const [showResult, setShowResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = async () => {
    let result = await run(value);
    setShowResult(result);
  };

  return (
    <div className="App">
      <h1>Google Gemini</h1>
      <div>
        <input type="text" onChange={handleChange} value={value} />
        <FontAwesomeIcon
          onClick={handleClick}
          className="icon"
          icon={faPenNib}
        />
      </div>
      {showResult && (
        <div className="result">
          <div className="result-title">{value}</div>
          <div className="result-data">
            <span dangerouslySetInnerHTML={{ __html: showResult }}></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
