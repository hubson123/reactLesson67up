import React, { Component } from "react";
import "../styles/App.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import Page from "./Page.js";
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
