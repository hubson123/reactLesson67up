import React, { Component } from "react";
import "../styles/App.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import Page from "./Page.js";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
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
      </BrowserRouter>
    );
  }
}

export default App;
