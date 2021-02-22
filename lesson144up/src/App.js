import React, { createRef, PureComponent } from "react";
import Counter from "./Counter";
class App extends PureComponent {
  state = {
    isCounterVisible: true,
  };
  showCounter = () => {
    this.setState((prev) => ({
      isCounterVisible: !prev.isCounterVisible,
    }));
  };
  paragraphElement = createRef();
  focusParagraphInput = () =>
    (this.paragraphElement.current.textContent += "!");
  render() {
    const counterElement = this.state.isCounterVisible ? <Counter /> : null;
    return (
      <div>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.focusParagraphInput}>
          Ustaw focus na paragraf
        </button>{" "}
        <button onClick={this.showCounter}>Pokaż/ukryj licznik</button>
        {counterElement}
      </div>
    );
  }
}

export default App;
