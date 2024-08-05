import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountButton from "./CountButton.jsx";

function App() {
  const [increment, setIncrement] = useState(1);
  return (
    <div className="App">
      <input
        type="number"
        value={increment}
        onChange={(event) => {
          const value = parseInt(event.target.value, 10);
          setIncrement(value);
        }}
      ></input>
      <CountButton initialValue={0} increment={increment}></CountButton>
    </div>
  );
}
export default App;
