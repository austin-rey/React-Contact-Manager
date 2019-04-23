import React, { Component } from "react";

class Contact extends Component {
  render() {
    //Destructuring of props
    const { name, email, phone } = this.props;
    return (
      <div className="App">
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
