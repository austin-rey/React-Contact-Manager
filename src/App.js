import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <AddContact />
          <Contacts />
          <div className="container" />
        </div>
      </Provider>
    );
  }
}

export default App;
