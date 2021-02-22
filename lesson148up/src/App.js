import React, { useCallback, useState } from "react";
import Counter from "./Counter";
const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const increaseFirstCounter = useCallback(() => {
    setFirstCounter((prev) => prev + 1);
  }, []);
  const increaseSecondCounter = useCallback(() => {
    setSecondCounter((prev) => prev + 1);
  }, []);
  const increaseX = <Counter callback={increaseFirstCounter} index={1} />;
  const increaseY = <Counter callback={increaseSecondCounter} index={2} />;

  return (
    <div>
      <h1>Hello </h1>
      <p>Licznik 1: {firstCounter}</p>
      <p>Licznik 2: {secondCounter}</p>
      {increaseX}
      {increaseY}
    </div>
  );
};

export default App;
