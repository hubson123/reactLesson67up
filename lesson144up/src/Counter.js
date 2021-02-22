import React, { createRef } from "react";
class Counter extends React.PureComponent {
  state = {
    counter: 0,
  };
  componentRef = createRef(true);
  asyncIncreaseCounterValue = () => {
    setTimeout(() => {
      if (this.componentRef.current) {
        this.setState((prev) => ({
          counter: prev.counter + 1,
        }));
      }
    }, 3000);
  };
  render() {
    return (
      <>
        <div ref={this.componentRef}>
          <p>Wartość licznika wynosi: {this.state.counter}</p>
          <button onClick={this.asyncIncreaseCounterValue}>
            Pobierz asynchroniczne dane
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
