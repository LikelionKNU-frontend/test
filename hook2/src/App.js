import "./App.css";
import CountEx from "./CountEx";
import StateEx2 from "./StateEx2";
import EffectEx from "./EffectEx";
import Timer from "./Timer";
import { useState } from "react";
import ClickCounter from "./ClickCounter";
import AutoFocusInput from "./AutoFocusInput";
import KeyPressExample from "./KeyPressExample";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      <CountEx />
      <StateEx2 />
      <EffectEx />
      <Timer />
      {showTimer && <Timer />}
      <button onclick={() => setShowTimer(!showTimer)}>타이머 버튼</button>
      <ClickCounter />
      <AutoFocusInput />
      <KeyPressExample />
    </div>
  );
}

export default App;
