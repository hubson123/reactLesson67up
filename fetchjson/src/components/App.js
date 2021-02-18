import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  };
  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }
  fetchData = () => {
    fetch("data/words.json")
      .then((respnse) => respnse.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  };
  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));
    return <ul>{this.state.isLoaded ? words : "Wczytuje dane"}</ul>;
  }
}

export default App;
