import React, { Component } from 'react';
//parent component that stores all routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container" />
            {/* All routes go in here */}
            <Switch>
              {/* Route Takes path and component */}
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
