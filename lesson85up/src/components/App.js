import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    user: "",
    email: "",
    password: "",
    check: false,
    message: "",
    errors: {
      user: false,
      email: false,
      password: false,
      check: false,
    },
  };
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
  messages = {
    username_incorrect:
      "Nazwa musi byc dłuższa niż 10 znaków i nie może zawierać spacji.",
    email_incorrext: "Brak @ w emailu",
    password_incorrect: "Hasło musi mieć 8 znaków",
    accept_incorrect: "Niepotwierdzona zgoda",
  };
  formValidate = () => {
    let user = false;
    let email = false;
    let password = false;
    let check = false;
    let correct = false;
    if (this.state.user.length > 10 && this.state.user.indexOf(" ") === -1) {
      user = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.password.length === 8) {
      password = true;
    }
    if (this.state.check) {
      check = true;
    }
    if (user && email && password && check) {
      correct = true;
    }
    return { correct, user, email, password, check };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const validate = this.formValidate();
    if (validate.correct) {
      this.setState({
        user: "",
        email: "",
        password: "",
        check: false,
        message: "Formularz wyslany",
        errors: {
          user: false,
          email: false,
          password: false,
          check: false,
        },
      });
    } else {
      this.setState({
        errors: {
          user: !validate.user,
          email: !validate.email,
          password: !validate.password,
          check: !validate.check,
        },
      });
    }
  };
  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: "",
          }),
        3000
      );
    }
  }
  render() {
    let { user, email, check, password } = this.state.errors;
    return (
      <div>
        <section>
          <h2>Formularz z prosta walidacją w ReactJS</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="user">
              Twoje imię:{" "}
              <input
                onChange={this.handleChange}
                name="user"
                type="text"
                id="user"
                value={this.state.user}
              />{" "}
            </label>{" "}
            {user && <span>{this.messages.username_incorrect}</span>}
            <label htmlFor="email">
              Twój adres email:{" "}
              <input
                id="email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />{" "}
            </label>{" "}
            {email ? <span>{this.messages.email_incorrext}</span> : ""}
            <label htmlFor="password">
              Twoje hasło:{" "}
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>{" "}
            {password ? <span>{this.messages.password_incorrect}</span> : ""}
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
            {check && <span>{this.messages.accept_incorrect}</span>}
            <button>Zapisz się</button>
          </form>
          {this.state.message && <h3>{this.state.message}</h3>}
        </section>
      </div>
    );
  }
}

export default App;
