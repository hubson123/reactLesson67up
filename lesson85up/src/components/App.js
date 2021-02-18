import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = { user: "", email: "", password: "", check: false };
  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">
            Twoje imię:{" "}
            <input
              onChange={this.handleChange}
              name="user"
              type="text"
              id="user"
              value={this.state.user}
            />
          </label>

          <label htmlFor="email">
            Twój adres email:{" "}
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Twoje hasło:{" "}
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="check">
            <input
              id="check"
              type="checkbox"
              name="check"
              checked={this.state.check}
              onChange={this.handleChange}
            />{" "}
            Wyrażam zgodę
          </label>

          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;
