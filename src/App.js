import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Main app component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />

          <Contact
            name="Austin Reynaud"
            email="arey@gmail.com"
            phone="666-666-6666"
          />
        </div>
      </div>
    );
  }
}

export default App;
