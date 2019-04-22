import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";

//Main app component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Container</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
