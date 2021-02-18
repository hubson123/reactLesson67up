import React, { Component } from "react";

import "./App.css";
const data = [
  { id: 1, title: "Wiadomość nr 1", body: "Zawartość wiadomości nr 1 ..." },
  { id: 2, title: "Wiadomość nr 2", body: "Zawartość wiadomości nr 2 ..." },
  { id: 3, title: "Wiadomość nr 3", body: "Zawartość wiadomości nr 3 ..." },
  { id: 4, title: "Wiadomość nr 4", body: "Zawartość wiadomości nr 4 ..." },
];
setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomości numer ${index}`,
  });
}, 4000);
class App extends Component {
  state = {
    comm: [...data],
  };
  getData = () => {
    if (this.state.comm.length !== data) {
      this.setState({
        comm: [...data],
      });
    }
  };
  componentDidMount() {
    this.idek = setInterval(this.getData, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.idek);
  }
  render() {
    const comm = this.state.comm.map((k) => (
      <div key={k.id}>
        <h5>{k.title}</h5>
        <p>{k.body}</p>
      </div>
    ));
    return <div className="App">{comm.reverse()}</div>;
  }
}

export default App;
