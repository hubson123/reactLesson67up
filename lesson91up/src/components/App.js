import React, { Component } from "react";
import AddTask from "./AddTask";
import "./App.css";
import TaskList from "./TaskList";

class App extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: "sprzedać skuter",
        date: "2021-03-01",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "kupić ziemniaki na obiad",
        date: "2021-02-22",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "kupic bilet miesięczny na autobus",
        date: "2021-02-27",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "przedłużyć karnet na siłkę",
        date: "2021-01-14",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "sprawdzić aktualny stan konta",
        date: "2021-02-20",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "wyczyścić akwarium",
        date: "2021-02-20",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevstate) => ({
      tasks: [...prevstate.tasks, task],
    }));
    return true;
  };
  render() {
    return (
      <div>
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          changeTaskStatus={this.changeTaskStatus}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
