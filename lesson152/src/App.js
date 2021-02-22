import React, { useEffect, useLayoutEffect, useState } from "react";
import Triangle from "./Triangle";
import "./style.css";
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClick = () => {
    setIsVisible((prev) => !prev);
  };
  const TriangleCOmponentn = isVisible ? <Triangle /> : null;

  useEffect(() => console.log("Po wyrenderowaniu DOM"));
  useLayoutEffect(() => console.log("Przed wyrenderowaniu DOM"));
  return (
    <div>
      <button onClick={handleOnClick}>Toggle</button>
      {TriangleCOmponentn}
    </div>
  );
};

export default App;
