import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

//Main app component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />

        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />

        <Contact
          name="Austin Reynaud"
          email="arey@gmail.com"
          phone="666-666-6666"
        />
      </div>
    );
  }
}

export default App;
