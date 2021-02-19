import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    check: false,
    date: this.minDate,
  };
  handleAddTask = () => {
    const { text, check, date } = this.state;
    if (text.length > 2) {
      const add = this.props.addTask(text, date, check);
      if (add) {
        this.setState({
          text: "",
          check: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Za krótka nazwa nazwa");
    }
  };
  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleChangeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleChangeCheck = (e) => {
    this.setState({
      check: e.target.checked,
    });
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div>
        <p>Dodaj zadanie</p>
        <input
          value={this.state.text}
          placeholder="dodaj zadanie"
          onChange={this.handleChangeText}
        />
        <input
          onChange={this.handleChangeCheck}
          id="important"
          type="checkbox"
          checked={this.state.check}
        />
        <label htmlFor="important">Priorytet</label>
        <label htmlFor="date">Do kiedy zrobić </label>
        <input
          onChange={this.handleChangeDate}
          min={this.minDate}
          max={maxDate}
          value={this.state.date}
          id="date"
          type="date"
        />
        <button onClick={this.handleAddTask}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
