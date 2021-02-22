import React from "react";
import Form from "./Form";
import Comments from "./Comments";
import StoreProvider from "./stores/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <div>
        <h2>Opinie na temat naszej ksiazki</h2>
        <Comments />
        <Form />
      </div>
    </StoreProvider>
  );
};

export default App;
