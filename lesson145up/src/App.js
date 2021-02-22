import React, { createRef, useEffect, useRef, useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const textInput = useRef();
  useEffect(() => {
    return () => (textInput.current = false);
  }, []);
  const numberInput = createRef();
  const handleFocusInput = () => {
    textInput.current.focus();
  };
  const increaseCOunter = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    textInput.current.focus();
  }, []);
  return (
    <div>
      <input ref={textInput} type="text" />
      <input ref={numberInput} type="number" />
      <button onClick={handleFocusInput}>Ustaw focus na input</button>
      <button onClick={increaseCOunter}>zwieksz licznik</button>
      {counter}
    </div>
  );
};

export default App;
