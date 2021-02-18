import "./App.css";
import React, { Component } from "react";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = { time: 0, active: false };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSeconds(), 1000);
    }

    this.setState({
      active: !this.state.active,
    });
  };
  addSeconds = () => {
    this.setState({
      time: this.state.time + 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <SwitchButton active={this.state.active} click={this.handleClick} />
      </div>
    );
  }
}

export default App;
